import React from "react";
import demo from "../assets/logos/logo.png";

const Testimonial = () => {
  return (
    <div className="flex space-x-5 py-10 px-10 bg-gradient-to-tr from-[#192c28] from-70% to-[#121315] text-white">
      <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full" />
        <div className="box space-y-2">
          <h5 className="text-xl font-bold text-center">Arshad</h5>
          <p className="text-center">
            "DevXplore's team provided excellent communication, valuable
            insights, and high-quality development services that exceeded our
            expectations. Highly recommended."
          </p>
        </div>
      </div>
      <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full" />
        <div className="box space-y-2">
          <h5 className="text-xl font-bold text-center">Om Verma</h5>
          <p className="text-center">
            "DevXplore exceeded expectations with communication, insights, and
            quality development services. Highly recommend for their innovative
            approach."
          </p>
        </div>
      </div>
      <div className="card bg-[#0b0b0b] py-10 h-52 px-10 w-1/3 flex items-center justify-around space-x-5 rounded-md shadow-xl">
        <img src={demo} alt="" className="w-20 h-20 rounded-full" />
        <div className="box space-y-2">
          <h5 className="text-xl font-bold text-center">Aman</h5>
          <p className="text-center">
            "DevXplore delivered outstanding development services with an
            innovative approach and exceptional communication. Highly recommend
            for any development needs."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
