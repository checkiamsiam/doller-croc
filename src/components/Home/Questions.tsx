import Accordion from "../Common/Accordion";

const Questions = () => {
  return (
    <div className="container mx-auto px-5 py-5">
      <h2 className={` text-white text-center md:text-[96px] text-[40px] font-kardia uppercase `}>Have any questions?</h2>

      <div className="md:mt-10 mt-5">
        <hr />

        <div className="">
          <Accordion que="Lorem Ipsum is simply dummy text" />
          <Accordion que="Lorem Ipsum is simply" />
          <Accordion que="Lorem Ipsum is" />
          <Accordion que="Lorem Ipsum is simply dummy" />
          <Accordion que="Lorem Ipsum is simply" />
        </div>
      </div>
    </div>
  );
};

export default Questions;
