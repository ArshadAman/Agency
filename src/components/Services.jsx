import React from "react";

const Services = () => {
  return (
    <div className="bg-black text-white flex py-10 items-center" id="services">
      <div className="left w-[55%] px-10 flex flex-col justify-start space-y-1">
        <p className="text-[#647f76] font-semibold">OUR SERVICES</p>
        <h2 className="capitalize text-4xl">
          What we <span className="text-[#73d5ba]">Do</span>.
        </h2>
        <div className="line w-16 h-0.5 bg-[#7c8b86]"></div>
        <div className="para space-y-5">
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
            voluptatem eum sed? Esse itaque minus recusandae nihil numquam,
            perferendis officiis necessitatibus, blanditiis iusto ipsum odio
            harum et voluptates asperiores. Iste.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequatur, temporibus.
          </p>
        </div>
      </div>
      <div className="right flex space-x-3 w-[45%]">
        <div className="dabba1 space-y-3">
          <div className="chhota-dabba w-[250px] h-[200px] bg-[#0b0b0b] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-inner">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
          <div className="chhota-dabba w-[250px] h-[200px] bg-gradient-to-b from-[#010101] from-18% to-[#132a28] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-lg">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
        </div>
        <div className="dabba2 space-y-3 my-6">
          <div className="chhota-dabba w-[250px] h-[200px] bg-gradient-to-b from-[#010101] from-18% to-[#132a28] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-lg">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
          <div className="chhota-dabba w-[250px] h-[200px] bg-[#0b0b0b] flex flex-col items-center justify-center text-center p-2 space-y-2 shadow-inner">
            <p>icon</p>
            <h3 className="text-2xl font-semibold">Website Development</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              maiores?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
