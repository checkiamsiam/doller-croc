"use client"
import { useState } from "react";

const Accordion = ({que}:{que:string}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setOpen(!open)} className="py-10 grid grid-cols-12 cursor-pointer">
        <div className="col-span-10">
          <h6 className="md:text-4xl  text-white font-kardia">{que}</h6>
          <p className={`md:text-2xl text-[#ffffffcc] mt-4 ${open ? "h-fit  opacity-100" : "h-0 hidden opacity-0"}`}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum
          </p>
        </div>
        <div className="col-span-2 flex justify-end">
          <button
            className={`md:w-12 w-8 md:h-12 h-8  border-2 border-black rounded-full flex justify-center items-center ${
              open ? "bg-secondary" : "bg-white"
            }`}
          >
            <img src={open ? "/icons/minus-sign.png" : "/icons/plus-sign.png"} alt="open-close" />
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Accordion;
