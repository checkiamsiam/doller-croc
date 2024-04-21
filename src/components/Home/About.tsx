import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen 2xl:min-h-[1900px] bg-[url('/images/about/about_bg.png')] bg-cover bg-bottom relative py-52 -mb-[470px]"
    >
      {/* Top Element */}
      <div className="absolute bottom-[99%] left-0 w-full z-20">
        <img
          src="/images/about/about_bg_top.png"
          alt="about_bg_top"
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div>
        {/* Top */}
        <div className="relative">
          <div className="max-w-[680px]  mx-auto text-center">
            <h2
              className={` text-white md:text-[92px] text-[40px] uppercase font-kardia`}
            >
              About $Croc
            </h2>
            <p className="font-kameron text-white/80 text-lg md:text-2xl">
              Navigating the calm lakes of the blockchain, $CROC effortlessly
              glides past market foxes and bears, leaving a trail of memes in
              its wake. With the swift Solana blockchain under our wings, every
              quack echoes further. It&apos;s not just about staying afloat;
              it&apos;s about savoring the ripples we create. Dive in with $CROC
              for a unique splash in the world of meme coins. We&apos;re here to
              make waves, blending smiles with ease as we chart our course.
            </p>
          </div>

          <div className="absolute -top-60 left-32 p-8">
            <Image
              src="/images/croc.png"
              alt="croc"
              width={500}
              height={500}
              priority
              className="sip-animation"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
