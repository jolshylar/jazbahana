import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="uppercase text-white flex flex-col md:flex-row items-center justify-center gap-8 py-24 bg-star bg-cover">
      <div className="p-4 font-montserrat font-bold">
        <h1>Having problems with school?</h1>
        <h1 className="my-4">Easily trade your notes</h1>
        <h1 className="bg-secondary rounded-[20px] max-w-max p-4">
          with Jazbahana
        </h1>
        <button className="main">
          <Link href="#what-is-jazbahana">GET STARTED &rarr;</Link>
        </button>
      </div>
      <Image
        className="hover:translate-y-[-5px] duration-1000"
        src="/images/jp-card.png"
        width={382}
        height={518}
        alt="JazbaPoint Card"
      />
    </div>
  );
};

export default Hero;
