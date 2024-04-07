import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import { FaArrowRight,FaArrowLeft } from "react-icons/fa";
import image from '../assets/image.png'
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const Card=({name,img,title, description})=>{
    return (
      <div className="bg-[#06412f] w-80 relative flex justify-center z-20 p-8 mt-40">
        <button className="rounded-full bg-[#06412f] absolute -top-20 h-32 w-64 rounded-b-none">
        </button>
        <div className="relative z-20 text-center">
            <img src={img} alt="" className="w-20 h-20 mx-auto -mt-8 rounded-full" />
            <p className="pt-4 pb-2 text-xl font-semibold">{name}</p>
            <p className="pb-4 font-light">{title}</p>
            <hr className="" />
            <p className="pt-4">{description}</p>
          </div>
      </div>
    )
  }
function Testimonial() {
  const ButtonGroup=({next, previous})=>{
    return(
      <div className="absolute flex items-center justify-end w-full gap-4 mb-4 carousel-bottom-group lg:top-0 top-8">
        <button className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:[#fd7b47] border border-white"
        onClick={()=>previous()}
        >
        <FaArrowLeft className=""/>
        </button>
        <button className="block p-3 bg-slate-300 rounded-full focus:bg-[#fd7b47] hover:[#fd7b47] border border-white"
        onClick={()=>next()}
        >
          <FaArrowRight className=""/>
        </button>
      </div>
    )
  }
  return (
    <>
    <div className='relative overflow-hidden bg-[#003b29] lg:py-24 py-8'>
        <div className="h-[50px] bg-[#fff6ed] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
        <div className="xl:w-[1200px] text-white mx-auto px-3">
            <p className="">Testimonial</p>
            <div className="relative pb-8 lg:pb-0">
                <h1 className="text-xl lg:text-4xl">What our <span className="underline decoration-[#fdca51] ">client</span> say's</h1>
                <Carousel 
                responsive={responsive}
                swipable={true}
                draggable={false}
                arrows={false}
                infinite
                autoPlay
                renderButtonGroupOutside={true} 
                customButtonGroup={<ButtonGroup />}
                >
                   <Card img={image} title={'founder'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt?'}/>
                   <Card img={image} title={'founder'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt?'}/>
                   <Card img={image} title={'founder'} description={'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, incidunt?'}/>
                </Carousel>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial