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
        
      </div>
    </div>
  );
};

export default Tokenomics;
