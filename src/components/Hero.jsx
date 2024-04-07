import React from 'react'
import { IoMdArrowDropright} from 'react-icons/io'
import image from '../assets/image.png'
function Hero() {
  return (
    <>
    <div className="relative overflow-hidden bg-[#003b29] lg:py-20 py-8">
        <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-[30px] rounded-[50%]"></div>
        <div className="xl:w-[1200px] mx-auto px-3 lg:flex items-center justify-between ">
            <div className="text-white lg:w-1/2">
            <h1 className="pb-8 text-2xl font-medium leading-normal lg:text-7xl first-letter:capitalize">
                architects with <span className="underline italic decoration-[#fdca51]  ">diffrent</span> approach
            </h1>
            <p className="pb-8 font-light text-md lg:w-2/3 first-letter:capitalize">
               architecture is the art and technique of designing and building, as distinguished from the skills 
            </p>
            <div className="flex items-center justify-center md:justify-start gap-x-2">
            <button className="rounded-full px-3 py-2 flex items-center text-sm bg-[#fd7b47] gap-2 transition ease-out duration-300 transform hover:scale-110">
                <p>Our Services</p>
                <IoMdArrowDropright className="text-xl"/>
            </button>
            <button className="flex items-center gap-2 px-3 py-2 text-sm transition duration-300 ease-out transform rounded-full hover:scale-110">
                <p>View projects</p>
                <IoMdArrowDropright className="text-xl"/>
            </button>
            </div>
            </div>
            <div className="lg:w-[35%] w-72 relative lg:mx-0 mx-auto lg:flex justify-end lg:py-0 py-8">
            <img src={image} alt="" className="lg:w-full" />
            <img src={image} alt="" className="absolute hidden w-1/4 sm:block lg:w-40 bottom-16 lg:-left-20 -left-10" />
            <p className="absolute right-0 font-medium text-white rotate-90 top-10">
                +75.8%
            </p>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Hero