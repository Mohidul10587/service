import Image from "next/image";
import React from "react";

const AboutBanner = () => {
  return (
    <div className=" bg-[url('/ecommerce.jpeg')] bg-no-repeat bg-opacity-50 h-[750px] ">
    <div className="bg-gray-900 bg-opacity-70 text-gray-50 h-[750px] flex items-center justify-center">
      <div>
        <h1 className="text-5xl text-center ">-----LETS-----</h1>
        <h1 className="text-4xl text-center">SHARE YOUR OPINION</h1>
        <h1 className="text-xl text-center ">FEEL FREE TO INFORM US ANYTHING</h1>
        <h1 className="text-4xl text-center  font-bold">VASTCOPE-CONTACT</h1>
      </div>
    </div>
  </div>
  );
};

export default AboutBanner;
