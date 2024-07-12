import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="w-full h-auto mx-auto ">
        <img
          className="w-full h-[100vh]  object-fill relative "
          src="https://edify.pk/_next/image?url=%2Fhero%2Fslider-1.webp&w=1920&q=75"
          alt=""
        />

        <div className="absolute inset-0 bg-black opacity-35 mt-[64px]"></div>

        <div className="absolute top-[40%] ml-8 translate-x-10 ">
          <p className="text-[#FFF]  md:font-bold font-thin tracking-widest ml-5 text-3xl md:text-base translate-x-[-50px] md:translate-x-0 -translate-y-15">
            Overseas Education Consultants
          </p>
          <h1 className="  md:text-6xl text-[#ffff] font-serif tracking-widest p-4 translate-x-[-50px] text-4xl md:translate-x-0">
            Study Abroad Consultants
          </h1>
          <span className=" ml-4 tracking-widest text-[#fff] hidden md:block">
            Edify Group of Companies, as leading Study Abroad Consultants,
            <div className="block "></div>{" "}
            <span className="ml-0">
              takes immense pride in partnering with the best educational
            </span>{" "}
            <div className="block"></div>
            <span className="ml-0">institutions.</span>
            <div>
              <div className="inline-block bg-[#1456a3] px-4 py-2 rounded-sm  mt-4">
                <button>Apply Now</button>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
