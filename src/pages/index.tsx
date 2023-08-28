"use client"; // this is a client component

import Image from 'next/image'
import{ImAndroid} from 'react-icons/im'
import { RiComputerLine } from 'react-icons/ri'
import { MdDomain, MdPhotoSizeSelectActual } from 'react-icons/md'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { BsBook, BsSuitHeart} from 'react-icons/bs'
import Link from 'next/link'
import YourProject from '../components/YourProject';
import CountUp from 'react-countup';
import { FiUsers } from 'react-icons/fi';
import Banner from '../components/Banner';




export default function Home() {





  return (

    <div className='text-gray-200'>

      {/* Banner */}
     <Banner />
      {/* services */}
      <div className="py-20 bg-color-second">

        <h2 className=" sm:text-4xl text-2xl text-center font-bold px-4">THE SERVICES THAT WE PROVIDE</h2>
        <div className="flex justify-center mt-4">
          <h4 className="sm:text-center text-justify sm:text-lg  font-semibold   mt-2 max-w-[800px] px-4">We provide outsourcing software development service and offshore software development center to customers. We develop innovative mobile apps and web apps to make complex things to become simple.</h4>
        </div>
        <div className="flex justify-center mt-10">
          <div className="">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-center  gap-2">
              <div className="h-[550px] md:w-[380px]  w-full bg-[url('/qurbani.jpeg')] bg-no-repeat bg-cover ">
                <div className="w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">

                  <div>
                    <h1 className="flex justify-center"> <RiComputerLine className='text-5xl'/></h1>
                    <h1 className="text-gray-200 text-3xl md:inline grid grid-cols-1 place-items-center "><span>Qurbani</span></h1>
                  </div>

                </div>
              </div>
              <div className=" h-[550px] md:w-[380px]  w-full bg-[url('/deathService.jpeg')] bg-no-repeat bg-cover ">
                <div className="w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">

                  <div>
                    <h1 className="flex justify-center"> <ImAndroid className='text-5xl'/></h1>
                    <h1 className="text-gray-200 text-3xl md:inline grid grid-cols-1 place-items-center transition ease-in-out duration-1000 group-hover:text-red-500"><span>Death Service</span></h1>
                  </div>

                </div>
              </div>
              <div className="h-[550px] md:w-[380px]  w-full bg-[url('/ecommerce.jpeg')] bg-no-repeat bg-cover ">
                <div className="w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">

                  <div>
                    <h1 className="flex justify-center"> <BsBook className='text-5xl'/></h1>
                    <h1 className="text-gray-200 text-3xl">Online Shop</h1>
                  </div>

                </div>
              </div>
            
            </div>

          </div>
        </div>

      </div>
   
   
      {/* what our customers says */}
      <div className="bg-color-second py-20">

        <h1 className=" sm:text-4xl text-2xl text-center font-bold px-4">WHAT OUR CUSTOMER ARE SAYING</h1>

        <div className='md:px-32 p-2'>
          <div className='md:flex justify-between overflow-hidden bg-color-third rounded-2xl mt-10 items-center p-10 md:p-0'>

            <div className='relative w-1/4 '>
              <Image src='/customer2.jpeg' height={600} width={600} alt='img'></Image>

            </div>

            <div className='md:w-2/4 w-full pr-4'>
              <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti magnam dolores fugiat ab sapiente minus excepturi dolore est nulla recusandae? Beatae, quibusdam recusandae nisi ullam provident voluptatem rem quo eligendi.</p>
              <p className='text-red-600 mt-4'>John Abraham</p>
            </div>

          </div>
        </div>

      </div>
      {/* summary of works */}





      <div className="py-20 bg-color-first">
        <h1 className="sm:text-4xl text-2xl text-center font-bold px-4">BEST STATS & CASE STUDIES</h1>
        <p className="text-center px-10 mt-5">Heres our valuable customers trusted us. </p>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4 place-items-center px-4 mt-10">
          <div className="md:flex  items-center justify-center  w-full border-[1px]  border-red-900 py-12 rounded ">
           <div className='flex items-center justify-center '>
           <p className="md:mt-0 mt-4">  <RiComputerLine className='text-5xl'/></p>
            <div className="ml-4">
              <p className="text-5xl text-center mb-3" ><CountUp end={80}
                duration={5}
              /> +</p>
              <p className="text-lg text-center">Web Dev.</p>
            </div>
           </div>
           
          </div>
          <div className="md:flex  items-center justify-center  w-full border-[1px]  border-red-900 py-12 rounded ">
           <div className='flex items-center justify-center '>
           <p className="md:mt-0 mt-4">  <ImAndroid className='text-5xl'/></p>
            <div className="ml-4">
              <p className="text-5xl text-center mb-3" >40 +</p>
              <p className="text-lg text-center">Mobile App</p>
            </div>
           </div>
          </div>
          <div className="md:flex  items-center justify-center  w-full border-[1px]  border-red-900 py-12 rounded ">
           <div className='flex items-center justify-center '>
           <p className="md:mt-0 mt-4">  <FiUsers className='text-5xl'/></p>
            <div className="ml-4">
              <p className="text-5xl text-center mb-3" >40 +</p>
              <p className="text-lg text-center">Customers</p>
            </div>
           </div>
          </div>
          <div className="md:flex  items-center justify-center  w-full border-[1px]  border-red-900 py-12 rounded ">
           <div className='flex items-center justify-center '>
           <p className="md:mt-0 mt-4">  <BsSuitHeart className='text-5xl'/></p>
            <div className="ml-4">
              <p className="text-5xl text-center mb-3" >40 +</p>
              <p className="text-lg text-center">Satisfaction</p>
            </div>
           </div>
          </div>
       
        </div>
      </div>

      {/* Have you any project */}

      <YourProject />


    </div>
  )
}
