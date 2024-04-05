import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css";

function Testimonial() {
  return (
    <>
    <div className='relative overflow-hidden bg-[#003b29] lg:py-24 py-8'>
        <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
        <div className="xl:w-[1200px] text-white mx-auto px-3">
            <p className="">Testimonial</p>
            <div className="relative pb-8 lg:pb-0">
                <h1 className="text-xl lg:text-4xl">What our <span className="underline decoration-[#fdca51] ">client</span> say's</h1>

            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial