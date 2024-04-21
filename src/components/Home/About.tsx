import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen 2xl:min-h-[1900px] bg-[url('/images/about/about_bg.png')] bg-cover bg-bottom relative pt-80 pb-80 lg:pb-[500px] -mb-[470px]"
    >
      {/* Top Element */}
      <div className="absolute bottom-[99%] left-0 w-full ">
        <img
          src="/images/about/about_bg_top.png"
          alt="about_bg_top"
          className="w-full h-auto"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-2">
        {/* Top */}
        <div className="relative max-xl:pt-20">
          <h2
            className={` text-white md:text-[92px] text-[40px] uppercase font-kardia max-w-[680px] mx-auto text-center`}
          >
            About $Croc
          </h2>
          <p className="font-kameron text-white/80 text-lg md:text-2xl max-w-[680px] mx-auto text-center">
            Navigating the calm lakes of the blockchain, $CROC effortlessly
            glides past market foxes and bears, leaving a trail of memes in its
            wake. With the swift Solana blockchain under our wings, every quack
            echoes further. It&apos;s not just about staying afloat; it&apos;s
            about savoring the ripples we create. Dive in with $CROC for a
            unique splash in the world of meme coins. We&apos;re here to make
            waves, blending smiles with ease as we chart our course.
          </p>

          <div className="absolute bottom-[70%] left-1/2 max-xl:-translate-x-1/2 xl:-top-72 xl:left-0 py-8 z-20">
            <Image
              src="/images/croc.png"
              alt="croc"
              width={500}
              height={500}
              priority
              className="about-top-animation"
            />
          </div>
        </div>

        {/* Middle */}
        <div className="mt-8 xl:mt-60 flex flex-col-reverse xl:flex-row items-center xl:items-end relative gap-6">
          <p className="text-2xl xl:text-4xl font-kardia text-white max-w-lg max-xl:text-center xl:leading-[54px] xl:ml-[30%]">
            Guided by a clear vision, our approach is dynamic and
            forward-looking.
          </p>

          <div className="xl:absolute xl:right-0 xl:bottom-0 z-20">
            <Image
              src="/images/about/about_croc.png"
              alt="croc"
              width={406}
              height={406}
              priority
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 relative flex flex-col xl:flex-row items-center gap-8 xl:gap-40">
          <div className="max-lg:px-20">
            <Image
              src="/images/about/about_croc_bottom.png"
              alt="croc"
              width={410}
              height={405}
              priority
              className="about-bottom-animation"
            />
          </div>
          <p className="text-2xl xl:text-4xl font-kardia text-white max-w-2xl max-xl:text-center xl:leading-[54px] ">
            Our Mission: To build the ultimate community and make a global
            impact by doing our best every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
