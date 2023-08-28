import YourProject from '../components/YourProject';
import Image from 'next/image'
import React from 'react'
import { RiComputerLine } from 'react-icons/ri'
const about = () => {
  return (
    <div className='pt-20 bg-color-first text-gray-200'>

      <div className="  text-gray-200  md:px-10 px-4 md:flex  items-center justify-center">
        <div className="md:w-1/2 md:h-[500px] h-[350px] relative pl-20 ">
          <Image src="/ecommerce.jpeg" alt="" fill />

        </div>
        <div className='mt-4 md:w-1/2 md:pl-10 pl-2'>
          <h1 className="text-3xl ">We Build Your Dream Application And Grow Your Business</h1>
          <h4 className="mt-2 text-lg">
            Morbi quis vehicula libero. Quisque sagittis ligula eu euismod lobortis. Mauris dapibus mi vitae mi pellentesque congue. Duis vitae metus enim. Nullam nisi justo, varius nec sagittis in, tincidunt vel ligula. Maecenas ornare libero nulla, nec dictum.
          </h4>

          <div className='flex items-center mt-2 group'>
            <div className='p-2 bg-red-600 duration-700'>
              <Image src='/abou-icon-1.webp' width={40} height={40} alt=''></Image>
            </div>
            <p className='mt-1 font-bold ml-2 text-xl'>Attractive Ideas</p>
          </div>
          <div className='flex items-center mt-2 group'>
            <div className='p-2 bg-red-600 duration-700'>
              <Image src='/abou-icon-3.png' width={40} height={40} alt=''></Image>
            </div>
            <p className='mt-1 font-bold ml-2 text-xl'>Better Analytics</p>
          </div>
          <div className='flex items-center mt-2 group'>
            <div className='p-2 bg-red-600 duration-700'>
              <Image src='/abou-icon-2.webp' width={40} height={40} alt=''></Image>
            </div>
            <p className='mt-1 font-bold ml-2 text-xl'>Digital Application</p>
          </div>
          <div className='flex items-center mt-2 group'>
            <div className='p-2 bg-red-600 duration-700'>
              <Image src='/abou-icon-1.png' width={40} height={40} alt=''></Image>
            </div>
            <p className='mt-1 font-bold ml-2 text-xl'>Digital Advertisment</p>
          </div>
        </div>


      </div>


      {/* about paragraph */}

      <div className='flex justify-center'>
        <div className='md:w-9/12 px-4 md:px-0'>
          
          <h1 className='text-2xl mt-8 font-bold'>OUR WORLDWIDE CUSTOMER NETWORK</h1>

          <div className='w-full h-96 relative mt-4'  >
            <Image fill src='/map.webp' alt='' />
          </div>

          <p className='mt-4 text-justify'>In 2009, we effectively give our product advancement administration to Australia, US, and Cannada. The most well known administration is programming offshore center service. Our examination demonstrates that this pattern will keep up in 2017.</p>

          <p className='mt-4 text-justify'>While developing and growing up, we build up our strengths and unique cultures to be competitive with other software development company in Bangladesh, Australia and worldwide by providing 3E: Excellent project management, Effective communication, and Endless innovative technologies.</p>

          <div >
            <p className='font-bold text-2xl mt-5'>ALWAYS NEW BENCHMARK</p>
            <p className='text-justify'>
              Welcome to KHSoft Bangladesh Ltd. one of the best software companies in Bangladesh. Welcome to a company where your ideas count, where your determination creates a new world, where your talent and hard-works are rewarded. At KHSoft we always endeavor to lead towards development and creating a flexible, dynamic and cooperative organizational cultural.KHSoft Bangladesh Ltd. is one of the promising software, web application, mobile application & game development companies of Bangladesh which aims at creating a new standard in the era of software technology.</p>
          </div>
          <div>
            <p className='font-bold text-2xl mt-5'>BRIEF HISTORY</p>
            <p className='text-justify'>
              KHSoft Bangladesh Ltd. is the brainchild of some fresh youth brain. These young minds not only dreamt about something big, they chased it. The birth of KHSoft Bangladesh happened when a bunch of dream seekers planned for something extraordinary in the web and mobile development created a foundation, recruited efficient workers and paved the way for making the dream come true. And the best is yet to come out.</p>
          </div>
          <div>
            <p className='font-bold text-2xl mt-5'>WHAT WE OFFER</p>
            <p className='text-justify'>
              We offer excellence in user experience & design, agile engineering and innovation strategy for mobile apps in Bangladesh. In addition to design and development services, We narture innovation to generate and refine disruptive ideas. Going through examination, ideation and clarification, a creative team at KHSoft Bangladesh works with founders to always bring something new in mobile app industry. We provide high-quality web & mobile apps which will certainly be a revolutionary step towards the path of rapidly developing technology sector of Bangladesh. As a result, it has helped us to be one of the top software companies in Bangladesh.</p>
          </div>
          <div>
            <p className='font-bold text-2xl mt-5'>WE GOT SKILLS</p>
            <p className='text-justify'>
              One of the most prominent and updated companies which deals with software & IT related issues. Initially, it was founded in 2014 with a view to put a mark in the rapidly growing software & gaming industry of the country. Within a very short time KHSoft Bangladesh has started to draw the attention of the commmon people with its enhancement in quality services and started growing as one of the Top software companies in Bangladesh.</p>
          </div>
        </div>
      </div>


      {/* our technology */}



      <YourProject />
    </div>
  )
}

export default about;