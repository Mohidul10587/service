import Link from 'next/link'
import React from 'react'

const YourProject = () => {
  return (
    <div className="bg-[url('/chocholate.jpeg')] bg-no-repeat bg-cover">
        <div className=" h-[500px] flex items-center justify-center pt-10 text-gray-50">
        <div>
          <h1 className="text-5xl text-center mt-2 px-4">Do you Have any Project ?</h1>
          <p className="text-center px-10 mt-5">  We believe in client satisfaction and we deliver projects that can successfully meet or exceed the prospects of the stakeholders
          </p>
          <div className="flex justify-center mt-4">
            <Link href='/contact'>

              <button className="border-[1px] border-red-600 hover:text-red-600 duration-700  rounded-lg px-6 py-2">Contact  us</button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default YourProject