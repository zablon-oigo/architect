/* eslint-disable react/no-unescaped-entities */
import { FaBolt, FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6"
import { IoMdArrowDropright } from "react-icons/io"
function Footer() {
  return (
    <footer className="bg-[#003b29] text-white pb-16">
        <div className="container px-3 pt-8 mx-auto lg:pt-20">
          <section className="">
            <div className="items-center justify-between lg:flex">
              <span className="items-center justify-start lg:w-4/5 lg:flex">
                <button className="flex items-center text-white lg:w-1/3 gap-x-4">
                  <FaBolt className='text-2xl'/>
                  <p className="text-2xl ">Architect</p>
                </button>
                <p className="justify-center py-6 lg:flex lg:w-1/3 lg:py-0">Architecture with understanding people's mind</p>
              </span>
              <span className="flex items-center pb-4 lg:w-1/3 gap-x-8 lg:pb-0">
                <p className="">get in touch</p>
                <button className="rounded-full px-3 py-2 flex items-center bg-[#fdca51] text-[#003b29] gap-2 transition ease-out duration-300 transform">
                  <p>Contact us</p>
                  <IoMdArrowDropright/>
                </button>
              </span>
            </div>
            <div className="lg:py-20">
              <ul className="items-center justify-between lg:flex">
                <div className="items-center justify-start lg:flex lg:w-4/5">
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">home</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">design</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">work</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">projects</a>
                  </li>
                </div>
                <li className="pb-3 lg:w-1/3 lg:pb-0">Follow us</li>
              </ul>
              <ul className="items-center justify-between lg:flex lg:pt-8">
                <div className="items-center justify-start lg:flex lg:w-4/5">
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">About us</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">Blog</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">Service</a>
                  </li>
                  <li className="pb-3 lg:w-1/4 lg:pb-0">
                    <a href="" className="">Award</a>
                  </li>
                </div>
                <span className="flex items-center gap-4 text-white lg:w-1/3">
                  <FaFacebook className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
                  <FaInstagram className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
                  <FaYoutube className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
                  <FaLinkedinIn className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
                  <FaXTwitter className="cursor-pointer rounded-full border border-[#154b3b] p-2 h-8 w-8 "/>
                </span>
              </ul>
            </div>
          </section>
          <section className="">
            <ul className="justify-between pt-8 sm:flex">
              <li className="">
                <a href="">Privacy policy</a>
                </li>
              <li className="">
                <a href="">All rights reserved architects</a>
                </li>
              <li className="">
                <a href="">Terms&policy</a>
                </li>
            </ul>
          </section>
        </div>
    </footer>
  )
}

export default Footer