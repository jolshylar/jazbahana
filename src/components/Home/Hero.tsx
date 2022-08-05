import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="uppercase flex flex-col md:flex-row items-center justify-center gap-8 py-24">
      <div className="p-4">
        <h1>Having problems with school?</h1>
        <h1 className="my-4">Easily trade your notes</h1>
        <h1 className="text-secondary">with Jazbahana</h1>
        <Link href="#what-is-jazbahana">
          <button className="main">GET STARTED &rarr;</button>
        </Link>
      </div>
      <Image
        src="/images/jp-card.png"
        width={439}
        height={421}
        alt="JazbaPoint Card"
      />
    </div>
  );
}
