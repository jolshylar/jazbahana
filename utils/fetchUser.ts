import { supabase } from "./supabaseClient";

export default async function fetchUser(session: any, setUser: any) {
  let { data, error, status } = await supabase
    .from("profiles")
    .select(`username, bio, avatar_url, balance`)
    .eq("id", session.user.id)
    .single();

  if (error && status !== 406) throw error;
  setUser(data);
}
