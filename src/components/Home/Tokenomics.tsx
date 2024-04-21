"use client";

import Image from "next/image";
import { useState } from "react";

const Tokenomics = () => {
  const code = "CcTxKZHqU4E2Tek5gh1GZoPZPHncGFkZ36EVMsgDn6sK";
  const [isCopied, setIsCopied] = useState(false);
  const handleCopy = () => {
    setIsCopied(true);
    navigator.clipboard.writeText(code);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return (
    <div className="bg-secondary py-20">
      <div className="container px-5 mx-auto">
        <div className="relative ">
          <div className="xl:absolute -top-36 left-10 flex justify-center">
            <Image src="/images/tokenomics/croc-head.png" width={357} height={323} alt="Tokenomics" />
          </div>
          <div className="max-w-xl mx-auto flex flex-col justify-center items-center">
            <h2 className="md:text-9xl text-5xl text-center  font-kardia ">$CROC</h2>
            <h2 className="md:text-9xl text-5xl text-center  font-kardia">Tokenomics</h2>
          </div>
        </div>

        <div className="bg-white w-[90%] md:w-[770px] mx-auto rounded-full flex items-center justify-between gap-4 mt-20  py-4 px-7 shadow-primaryShadow">
          <p className="text-xl font-kardia text-black overflow-clip">{code}</p>

          <button
            className="text-2xl px-4 py-1  text-black bg-primary-light rounded-full border-primary border uppercase shadow-primaryShadow font-kardia bg-secondary"
            onClick={handleCopy}
          >
            {isCopied ? "Copied" : "Copy"}
          </button>
        </div>

        <div className="flex justify-between mt-20">
          <div className="self-end">
            <Image src="/images/tokenomics/arrow.png" width={234} height={214} alt="Tokenomics" />
          </div>
          <div className="min-h-screen">
            {/* the image card gellery here */}

            <div className="h-[523px] w-[408px] border-2 border-black p-5 bg-white rounded-2xl shadow-primaryShadow ">
              <div>
                <h3 className="text-3xl font-kardia text-black">LP BURNT</h3>
                <p className="text-5xl font-kardia text-black pt-5 ">LP BURNT</p>
              </div>

              <div className="-rotate-2 mt-6">
                <Image src="/images/tokenomics/sip.png" width={360} height={340} alt="Tokenomics" />
              </div>
            </div>
          </div>
          <div>
            <Image src="/images/tokenomics/croc-in-tree.png" width={291} height={270} alt="Tokenomics" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
