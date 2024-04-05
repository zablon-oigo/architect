import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
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
function Testimonial() {
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
                autoplay
                renderButtonGroupOutside={true} 
                customButtonGroup={<ButtonGroup />}
                >
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>
            </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial