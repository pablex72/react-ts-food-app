import React from "react";

const Hero = () => {
  return (
    <div 
    style={{ textShadow: '0px 1px 1px gray'}}
    className="flex flex-col items-center justify-start min-h-96 bg-gray-50 lg:pt-10 lg:pb-10 lg:bg-hero lg:bg-cover">
      <div>
        <p className="p-3 m-2 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300">
          Food App Welcome you
        </p>
      </div>
      <div>
        <p className="p-3 m-2 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300 lg:text-5xl lg:mx-auto lg:w-4/6">
          Food App Welcome you to your store
        </p>
      </div>
      <div>
        <p className="p-3 m-2 pt-12 text-lg font-bold text-gray-500 lg:text-gray-300 lg:text-2xl lg:mx-auto ">
          Food App Welcome you to your store
        </p>
      </div>
    </div>
  );
};

export default Hero;
