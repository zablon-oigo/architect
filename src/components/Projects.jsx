import {MdOfflineBolt} from 'react-icons/md'
import {SiHackthebox} from 'react-icons/si'
import {IoIosArrowUp, IoMdArrowDropright} from 'react-icons/io'
import {FaArrowUp, FaStackOverflow} from 'react-icons/fa'
import {TbVectorBezierCircle} from 'react-icons/tb'
import { BiLoaderCircle } from 'react-icons/bi'
import design1 from '../assets/design1.jpg'
import design2 from '../assets/design2.jpg'
import design3 from '../assets/design3.jpg'
import sub  from '../assets/sub.png'


function Projects() {
    const Card=({img,title,desc})=>{
        return (
            <div className="lg:pb-0 pb-4 w-full transform transition ease-out duration-300 hover:scale-[1.03]">
                <img src={img} alt="" className="mx-auto lg:w-full md:w-52" />
                <div className="flex items-center justify-between mx-auto md:w-auto w-60">
                    <span className="text-[#003b29] pt-2">
                        <p className="text-xl font-medium">{title}</p>
                        <p className="">{desc}</p>
                    </span>
                    <FaArrowUp className='text-2xl rotate-45'/>
                </div>
            </div>
        )
    }
  return (
    <div className='relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8'>
        <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%]"></div>
        <div className="xl:w-[1200px] max-w-[75%] mx-auto px-3 pt-8">
            <section className="relative py-8 lg:py-0">
                <p className="text-center text-[#fb7a3f] ">Our recent works</p>
                <h1 className="text-center text-[#054130] lg:text-5xl text-xl font-semibold">
                    Our completed projects
                </h1>
                <div className="items-center justify-between pt-8 md:flex lg:pt-20 gap-x-16">
                    <Card img={design1} title={'lorem ipsum'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet.'}/>
                    
                    <Card img={design2} title={'lorem ipsum'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet.'}/>
                    <Card img={design3} title={'lorem ipsum'} desc={'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eveniet.'}/>
                </div>
                <button className="flex items-center px-4 py-2 mx-auto mt-12 text-sm text-white bg-[#fd7b47] gap-2 transition duration-300 ease-out transform rounded-full hover:scale-110 ">
                <p className="">Load more </p>
                <IoMdArrowDropright className="text-xl"/>
              </button>
            <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]"/>
            <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45"/>
            <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]"/>
            <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]"/>
            </section>
            <section className="flex gap-2 mt-24 mb-16 -ml-14 lg:ml-0 lg:items-center lg:justify-between ">
                <span className="flex items-center lg:gap-x-2">
                    <MdOfflineBolt className='text-md lg:text-3xl'/>
                    <p className="text-xs font-medium lg:text-xl">BoltShift</p>
                    </span>  
                <span className="flex items-center lg:gap-x-2">
                    <SiHackthebox className='text-md lg:text-3xl'/>
                    <p className="text-xs font-medium lg:text-xl">Lightbox</p>
                    </span>  
                <span className="flex items-center lg:gap-x-2">
                    <FaStackOverflow className='text-md lg:text-3xl'/>
                    <p className="text-xs font-medium lg:text-xl">FeatherDev</p>
                    </span>  
                <span className="flex items-center lg:gap-x-2">
                    <BiLoaderCircle className='text-md lg:text-3xl'/>
                    <p className="text-xs font-medium lg:text-xl">Sphererule</p>
                    </span>  
                <span className="flex items-center lg:gap-x-2">
                    <TbVectorBezierCircle className='text-md lg:text-3xl'/>
                    <p className="text-xs font-medium lg:text-xl">Nietzsche</p>
                    </span>  
                
                </section>
                <section className="relative items-center justify-between mt-12 lg:flex lg:p-6">
                    <div className="w-full lg:w-1/2">
                        <p className="text-[#fb7a3f]">
                            Our Newsletter
                        </p>
                        <h1 className="text-[#054130] lg:text-4xl font-semibold pt-4 pb-6">Subscribe our daily <span className="underline decoration-[#fdca51] primary-font">newsletter</span> for update
                        </h1>
                        <p className="leading-normal text-black lg:leading-8">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas hic exercitationem ex odit iure consequuntur consequatur doloribus officia modi, at cumque? Non excepturi quidem officiis rerum consectetur incidunt voluptatum ex?
                        </p>
                        <div className="relative flex items-center pt-8">
                            <input type="email" name="" id="" className="px-2 bg-white rounded-full outline-none h-14 md:px-6" placeholder='Enter your email' />
                            <button className="absolute md:right-4 right-1 rounded-full md:px-8 px-3 flex items-center md:text-sm text-xs bg-[#fd7b47] text-white">
                                <p className="">Subscribe</p>
                                <IoMdArrowDropright className='h-12 text-xl'/>
                            </button>
                            
                        </div>
                    </div>
                     <div className="flex justify-center py-8 lg:w-2/3 lg:py-0">
                        <img src={sub} alt="" className="lg:w-full w-60" />
                     </div>
                </section>
        </div>
    </div>
  )
}

export default Projects