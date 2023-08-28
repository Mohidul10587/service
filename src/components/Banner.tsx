import Image from "next/image";
import React from "react";


const Banner = () => {
  return (
    <div className="pt-20 min-h-screen">
      <div className="bg-color-first hidden md:flex justify-between px-4 items-center text-gray-50 min-h-screen relative">
        <div className="pl-20">
          <h1 className="text-5xl ">WELCOME TO..
          <p className=" font-semibold "> CHETONA IT PARK</p> YOUR BEST IT SOLUTION </h1>
          <h4 className="mt-2 text-xl">
            Cooperating With Businesses To Find Solutions In The Complexity Of
            Software Development And Implementing With Excellence
          </h4>
          <button className="border-2 border-red-600 p-2 rounded-md mt-4  hover:text-red-600 duration-700">Read more</button>
        </div>

        <div className="w-[1600px] h-[700px] relative">
          <Image src="/banner-1.webp" alt="" fill />

        </div>

        
      </div>



      {/* https://dt-digiartz.myshopify.com/ */}

      {/* Banner for mobile device */}

      <div className="bg-red-900 min-h-screen md:hidden">

        <div className=" flex md:hidden  w-full items-center text-gray-50 bg-[url('/video.webp')] h-full bg-cover">
          <div className="w-full  bg-gray-900 bg-opacity-50 flex justify-center items-center">

            <div className="w-11/12 text-left min-h-screen flex items-center">
              <div className="">
              <h1 className="text-4xl font-bold  text-gray-50">Welcome  to.. <p className=" font-bold text-red-600">CHETONA IT PARK</p> Your best it solution </h1>
              <h4 className="mt-2  text-gray-50">  Cooperating With Businesses To Find Solutions In The ComplexityCooperating </h4>

              <button className="border-2 border-red-600 p-2 rounded-md mt-4  hover:text-red-600 duration-700">Read more</button>

              </div>
            </div>
          </div>


        </div>
      </div>


    </div>
  );
};

export default Banner;
