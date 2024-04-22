import Image from "next/image";
import Marquee from "react-fast-marquee";
import Tokenomics from "./Tokenomics";

const partnersData = [
  "/images/partnerAndBuy/mc-5.png",
  "/images/partnerAndBuy/mc-2.png",
  "/images/partnerAndBuy/mc-4.png",
  "/images/partnerAndBuy/mc-3.png",
  "/images/partnerAndBuy/mc-2.png",
  "/images/partnerAndBuy/mc-1.png",
  "/images/partnerAndBuy/mc-5.png",
  "/images/partnerAndBuy/mc-2.png",
  "/images/partnerAndBuy/mc-4.png",
  "/images/partnerAndBuy/mc-3.png",
  "/images/partnerAndBuy/mc-2.png",
  "/images/partnerAndBuy/mc-1.png",
];

const PartnerBuyNTokenomics = () => {
  return (
    <div className="bg-primary -mt-5">
      <div className="bg-[url('/images/partnerAndBuy/bg.png')] bg-cover bg-bottom bg-no-repeat py-96">
        <Tokenomics />
        <div>
          <h2 className={` text-black text-center md:text-[96px] text-[40px] font-kardia uppercase `}>Partners</h2>
          <div className="pb-20 flex flex-col gap-5">
            <Marquee autoFill speed={200}>
              {partnersData.map((data, index) => (
                <div key={index} className="px-4">
                  <Image src={data} width={215} height={215} alt="partner" />
                </div>
              ))}
            </Marquee>
            <Marquee autoFill speed={200} direction="right">
              {partnersData.map((data, index) => (
                <div key={index} className="px-4">
                  <Image src={data} width={255} height={255} alt="partner" />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="container px-5 mx-auto" id="how-to-buy">
            <div className="flex flex-wrap justify-center gap-5">
              {/* card 1 */}
              <div className="md:w-[440px] md:h-[361px] w-[330px] h-[271px] bg-[url('/images/partnerAndBuy/step-card-bg-1.png')] bg-no-repeat bg-cover bg-center p-5">
                <div>
                  <h3 className="font-kardia md:text-[56px] text-3xl mb-5">1</h3>
                  <h4 className="font-kardia md:text-5xl text-2xl mb-5 uppercase">download phantom</h4>
                  <p className="md:text-xl text-[#000000cc]">
                    Download and install Phantom wallet using either a desktop computer or an iOS/Android mobile device.
                  </p>
                </div>
              </div>
              {/* card 2 */}
              <div className="md:w-[706px] md:h-[361px] w-[330px] h-[271px] md:bg-[url('/images/partnerAndBuy/step-card-bg-2.png')] bg-[url('/images/partnerAndBuy/step-card-bg-1.png')] bg-no-repeat bg-cover bg-center p-5">
                <div className="grid grid-cols-12">
                  <div className="md:col-span-8 col-span-12">
                    <h3 className="font-kardia md:text-[56px] text-3xl mb-5">2</h3>
                    <h4 className="font-kardia md:text-5xl text-2xl mb-5 uppercase">GET YOUR SOL</h4>
                    <p className="md:text-xl text-[#000000cc]">
                      Buy your SOL in the Phantom wallet or use an exchange. Then deposit using your Phantom wallet address.
                    </p>
                  </div>
                  <div className="col-span-4 max-md:hidden">
                    <Image src="/images/partnerAndBuy/step-2-head.png" width={270} height={244} alt="step-card-2" />
                  </div>
                </div>
              </div>
              {/* card 3 */}
              <div className="md:w-[706px] md:h-[361px] w-[330px] h-[271px] md:bg-[url('/images/partnerAndBuy/step-card-bg-3.png')] bg-[url('/images/partnerAndBuy/step-card-bg-1.png')] bg-no-repeat bg-cover bg-center p-5">
                <div className="grid grid-cols-12">
                  <div className="md:col-span-8 col-span-12">
                    <h3 className="font-kardia md:text-[56px] text-3xl mb-5">3</h3>
                    <h4 className="font-kardia md:text-5xl text-2xl mb-5 uppercase">BUY SOME $CROC</h4>
                    <p className="md:text-xl text-[#000000cc]">
                      Go to raydium.io, connect and paste the $CROC contract address, select $CROC. Choose the amount of SOL to swap. When Phantom
                      asks for a wallet signature, sign it.
                    </p>
                  </div>
                </div>
              </div>
              {/* card 4 */}
              <div className="md:w-[440px] md:h-[361px] w-[330px] h-[271px] bg-[url('/images/partnerAndBuy/step-card-bg-1.png')] bg-no-repeat bg-cover bg-center p-5">
                <div>
                  <h3 className="font-kardia md:text-[56px] text-3xl mb-5">4</h3>
                  <h4 className="font-kardia md:text-5xl text-2xl mb-5 uppercase">CHECK YOUR WALLET</h4>
                  <p className="md:text-xl text-[#000000cc]">
                    Now you are ready! Open your Phantom wallet to see your $DUK holdings and track your earnings.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerBuyNTokenomics;
