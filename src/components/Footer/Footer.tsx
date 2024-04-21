import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="bg-[url('/images/footer/Vector.png')] 2xl:bg-contain bg-no-repeat bg-left-bottom min-h-[820px] custom-h-footer  flex items-end">
        <div className="container px-5 mx-auto">
          <div className="grid lg:grid-cols-2">
            <div className="flex items-center lg:order-1 order-2">
              <div>
                <Image src="/logo/logo_white.png" width={299} height={115} alt="logo" />

                <p className="text-2xl mt-12">Stay With $CROC</p>

                <div className="flex gap-4 mt-6">
                  <a href="#" className="w-12 h-12 bg-white border-2 border-black shadow-primaryShadow rounded-full flex justify-center items-center">
                    <img src="/icons/twitter.png" alt="twitter" />
                  </a>
                  <a href="#" className="w-12 h-12 bg-white border-2 border-black shadow-primaryShadow rounded-full flex justify-center items-center">
                    <img src="/icons/telegram.png" alt="telegram" />
                  </a>
                </div>
                <p className="mt-12">© 2024 $CROC</p>
              </div>
            </div>
            <div className="flex items-end justify-end lg:order-2 order-1 overflow-hidden">
              <Image src="/images/footer/Frame.png" width={735} height={652} alt="croco" className="sip-animation" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
