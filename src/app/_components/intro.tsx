import Image from "next/image";

export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="relative w-full max-w-[550px] aspect-[10/2]">
        <Image
          src="/assets/images/logo.png"
          alt="MeowTalker"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Finally! With {" "}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-blue-600 duration-200 transition-colors"
        >
          MeowTalker
        </a>{" "}
        , I can talk to my cat! 🐱
      </h4>
    </section>
  );
}
