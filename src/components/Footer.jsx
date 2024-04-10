/* eslint-disable react/no-unescaped-entities */
import { FaBolt, FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { IoMdArrowDropright } from "react-icons/io"
function Footer() {
  return (
    <footer className="bg-[#003b29] text-white pb-16">
        <div className="container flex justify-between flex-col px-3 pt-8 mx-auto lg:pt-20">
            <div className="w-full lg:w-2/3">
              <span className="">
                <button className="flex items-center mb-4 text-white lg:w-1/3 gap-x-4">
                  <FaBolt className='text-2xl'/>
                  <p className="text-3xl font-semibold ">Architect</p>
                </button>
                
              </span>
              <span className="">
                <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform">
                  <p>Contact us</p>
                  <IoMdArrowDropright/>
                </button>
              </span>
              <span className="flex items-center gap-4 mt-6 text-white lg:w-1/3">
              <FaFacebook className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
              <FaInstagram className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
              <FaYoutube className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
              <FaLinkedinIn className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
              <FaXTwitter className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
              </span>
            </div>

            <div className="flex justify-around w-full lg:w-3/4">
            <ul className="text-xl font-light capitalize gap-y-6">
                <li className="">
                    <a href="" className="">home</a>
                  </li>
                  <li className="">
                    <a href="" className="">design</a>
                  </li>
                  <li className="">
                    <a href="" className="">work</a>
                  </li>
                  <li className="">
                    <a href="" className="">projects</a>
                  </li>
                
              </ul>
              <ul className="text-xl font-light capitalize gap-y-6">
              <li className="">
                    <a href="" className="">About us</a>
                  </li>
                  <li className="">
                    <a href="" className="">Blog</a>
                  </li>
                  <li className="">
                    <a href="" className="">Service</a>
                  </li>
                  <li className="">
                    <a href="" className="">Award</a>
                  </li>
                
              </ul>
            </div>
            
          
        </div>
        
              <p className="mt-10 text-sm text-center font-extralight">Copyright &copy; {new Date().getFullYear()}</p>
    </footer>
  )
}
export default Footer