
"use client"; // this is a client component
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RxCross2 } from 'react-icons/rx'
import { VscThreeBars } from 'react-icons/vsc'



const Navbar = () => {
  const [dropdown, setDropdown] = useState(true)
  const [toggleCross, setToogleCross] = useState(false)

  return (
    <div className="">
      <nav className=" ">
        <div className="shadow-gray-500 shadow-md  bg-color-first text-gray-200 flex justify-between h-16 md:px-24 px-6 py-10 items-center fixed w-full  z-30">
          <Link href='/'>  
          <div className="w-16 h-16 
          flex justify-center items-center">
            
          <p className="text-3xl font-bold">LOGO</p>
          
            </div></Link>

          {/* menu for md device */}
          <ul className="md:flex hidden " >
            <Link className="mx-5 hover:text-red-600 duration-700 border-[1px] border-red-600 rounded-md px-3" href='/'> Home</Link>
            <Link className="mx-5 hover:text-red-600 duration-700 border-[1px] border-red-600 rounded-md px-3" href='/about'> About Us</Link>
            <Link className="mx-5 hover:text-red-600 duration-700 border-[1px] border-red-600 rounded-md px-3" href='contact'> Contact</Link>
            <Link className="mx-5 hover:text-red-600 duration-700 border-[1px] border-red-600 rounded-md px-3" href='service'> Services</Link>
          
          </ul>

          {/* <ul className="md:flex hidden">
            <Link className="hover:text-red-600 duration-700 border-[1px] border-red-600 rounded-md px-3" href='/'> Log In</Link>

          </ul> */}
        
          <VscThreeBars className={toggleCross ? "hidden bg-white text-black rounded-full p-1 text-4xl" : "md:hidden  bg-white text-black rounded-full p-1 text-4xl"}
            onClick={() => {

              setDropdown(!dropdown)
              setToogleCross(true)

            }}/>
          <RxCross2 className={toggleCross ? "md:hidden bg-white text-black rounded-full p-1 text-4xl" : "hidden  bg-white text-black rounded-full p-1 text-4xl"}
            onClick={() => {

              setDropdown(true)
              setToogleCross(false)

            }} />


          <div onClick={() => {
            setDropdown(true)
            setToogleCross(false)
          }} className={dropdown ? 'rounded-b bg-color-first  md:hidden fixed top-20 w-64  text-gray-200 z-30 -left-64 transition-all duration-700' : ' bg-color-first text-red-600 md:hidden fixed top-20 w-64 left-0  z-30 transition-all duration-700 rounded-b'} >

            <Link href='/'>  <p className=" border  px-2 py-1 mx-2 rounded my-3 ">Home</p></Link>
            <Link href='about'><p className=" border  px-2 py-1 mx-2 rounded my-3 ">About Us</p></Link>
            <Link href='contact'><p className=" border  px-2 py-1 mx-2 rounded my-3 ">Contact</p></Link>
            <Link href='service'><p className=" border  px-2 py-1 mx-2 rounded my-3 ">Services</p></Link>
         
            {/* <Link href='#'><p className=" border  px-2 py-1 mx-2 rounded my-3 ">Log In</p></Link> */}

          </div>
        </div>

      </nav>

    </div>
  );
};

export default Navbar;
