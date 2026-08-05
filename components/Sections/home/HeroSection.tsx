import Image from "next/image";
import Link from "next/link";
import HeroImg from "@/public/image/HeroImage.png";
export default function HeroSection() {
  return (
    <section className="relative  min-h-screen w-full h-full overflow-hidden mb-4">
      {/* Background */}
      <Image
        src={HeroImg}
        alt="Hero banner image"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Content */}
      <div className="relative z-10 flex w-fit h-[90dvh] items-center justify-center px-4 md:px-12 xl:px-34">
        <div className="max-w-xl">
          <span
            className={`inline-block
           rounded-full 
           border
            border-white/15
             bg-white/5
              px-3
              py-1 
              text-xs 
              
              uppercase tracking-[0.25em] text-neutral-300 backdrop-blur`}
          >
            Built For More
          </span>

          <h1 className="mt-6 text-4xl font-black uppercase leading-[1.1] text-primary md:text-6xl">
            Discipline Drives Destiny
          </h1>

          <p className="mt-6 max-w-[24rem] text-lg leading-8 text-neutral-300">
            Premium performance wear for those who exceed limits.
          </p>

          <div className="mt-10 flex gap-4">
            <Link
              href="/shop"
              className="inline-flex h-12 w-30 items-center justify-center rounded-md bg-primary font-semibold text-primary-foreground"
            >
              Shop Now
            </Link>

            <Link
              href="/explore"
              className="inline-flex h-12 w-30 items-center justify-center rounded-md border border-white/20 bg-white/5 font-semibold text-primary backdrop-blur transition hover:bg-white/10"
            >
              Explore
            </Link>
          </div>
        </div>
      </div>

      {/* Watch Film */}
      <button className="absolute bottom-12 right-10 flex flex-col items-center gap-3 text-primary">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur transition hover:scale-105">
          ▶
        </div>

        <span className="text-xs uppercase tracking-[0.2em] text-neutral-300">
          Watch Film
        </span>
      </button>
    </section>
  );
}
