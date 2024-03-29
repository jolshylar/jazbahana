import { supabaseClient, User } from "@supabase/auth-helpers-nextjs";
import { FormEvent, useEffect, useState } from "react";

export default function Avatar({
  user,
  url,
  onUpload,
}: {
  user: User | null;
  url: string | null;
  onUpload?: (url: string) => void;
}) {
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [avatarURL, setAvatarURL] = useState<string | null>(null);

  useEffect(() => {
    if (url) downloadImage(url);
  }, [url]);

  async function downloadImage(path: string) {
    try {
      const { data, error } = await supabaseClient.storage
        .from("avatars")
        .download(path);

      if (error) throw error;

      const url = URL.createObjectURL(data as Blob);
      setAvatarURL(url);
    } catch (error: any) {
      console.log("Error downloading image: ", error.message);
    }
  }

  async function deleteAvatar() {
    const splitURL = avatarURL?.split("/")!;
    const imgPath = splitURL[splitURL?.length - 1];
    try {
      setDeleting(true);

      let { error } = await supabaseClient.storage
        .from("avatars")
        .remove([imgPath]);

      let { error: updateError } = await supabaseClient
        .from<Profile>("profiles")
        .update({ avatar_url: "" })
        .match({ id: user?.id });

      if (error) alert(error);
      if (updateError) alert(error);
    } catch (error) {
      console.log("error", error);
    } finally {
      setDeleting(false);
    }
  }

  async function uploadAvatar(event: FormEvent) {
    const t = event.currentTarget as HTMLInputElement;
    try {
      setUploading(true);
      if (!t.files || t.files.length === 0) {
        throw new Error("You must select an image to upload.");
      }

      const file = t.files[0];
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;
      const filePath = `${fileName}`;

      let { error } = await supabaseClient.storage
        .from("avatars")
        .upload(filePath, file);

      if (error) throw error;

      if (onUpload) onUpload(filePath);
    } catch (error) {
      console.log("error", error);
    } finally {
      setUploading(false);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <img
          src={
            avatarURL ||
            "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
          }
          alt="Avatar"
          className={`rounded-full w-[100px] h-[100px] object-cover`}
        />
      </div>
      {onUpload && (
        <div className="flex gap-2 justify-center mx-auto">
          <label
            className="text-center text-gray-100 font-bold text-xl sm:text-2xl bg-blue-500 rounded-md p-2 mt-4 cursor-pointer"
            htmlFor="update"
          >
            {uploading ? "..." : "Upload"}
          </label>
          <input
            className="hidden absolute"
            type="file"
            id="update"
            accept="image/*"
            onChange={uploadAvatar}
            disabled={uploading}
          />
          {avatarURL && (
            <button
              className="text-center text-gray-100 font-bold text-xl sm:text-2xl bg-red-500 rounded-md p-2 mt-4 cursor-pointer"
              onClick={deleteAvatar}
              disabled={deleting}
            >
              {deleting ? "..." : "Delete"}
            </button>
          )}
        </div>
      )}
    </>
  );
}
