import { IoMdArrowDropright,IoIosArrowUp } from "react-icons/io";
import { PiDiamondsFourFill,PiLadderSimpleThin } from "react-icons/pi";
import { BiSolidTreeAlt } from "react-icons/bi";
import { SiLinktree,SiIcomoon } from "react-icons/si";
import { TbStackBackward } from "react-icons/tb";
function Work() {
  return (
    <>
    <div className="relative overflow-hidden bg-[#fff6ed] lg:py-20 py-8">
      <div className="h-[50px] bg-[#003b29] absolute -bottom-7 -left-[30px] -right-[30px] py-3 px-[30px] rounded-[50%] "></div>
      <div className="xl:w-[1200px] mx-auto px-3 pt-8">
        <section className="relative">
          <p className="text-center text-[#fb7a3f]">What we do</p>
          <h2 className="text-center text-[#054130] lg:text-5xl text-xl font-semibold capitalize ">
            Bringing new life to the <br/> old <span className="underline decoration-[#fb7a3f]">processes</span>
          </h2>
          <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-4 md:grid-cols-2">
            <span className="bg-[#fffaf4] duration-700 py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
                <PiDiamondsFourFill className="text-5xl"/>
                <p className="text-xl text-[#054130] font-semibold py-8 pb-4">Interior desing</p>
                <p className="font-light text-black ">
                  Interior design is the art and science enhancing
                </p>
            </span>
            <span className="bg-[#fffaf4] duration-700 py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
                <SiLinktree className="text-5xl"/>
                <p className="text-xl text-[#054130] font-semibold py-8 pb-4">Architectural</p>
                <p className="font-light text-black">
                  Interior design is the art and science enhancing
                </p>
            </span>
            <span className="bg-[#fffaf4] duration-700 py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
                <TbStackBackward className="text-5xl"/>
                <p className="text-xl text-[#054130] font-semibold py-8 pb-4">Construction</p>
                <p className="font-light text-black ">
                  Interior design is the art and science enhancing
                </p>
            </span>
            <span className="bg-[#fffaf4] duration-700 py-8 px-6 hover:bg-white hover:text-[#fb7a3f]">
                <BiSolidTreeAlt className="text-5xl"/>
                <p className="text-xl text-[#054130] font-semibold py-8 pb-4">Decoration</p>
                <p className="font-light text-black ">
                  Interior design is the art and science enhancing
                </p>
            </span>
          </div>
          <div className="">
            <PiLadderSimpleThin className="text-6xl text-[#fb7a3f] absolute top-0 left-0 opacity-20"/>
            <SiIcomoon className="text-6xl text-[#fb7a3f] absolute top-0 right-0 opacity-20 rotate-90"/>
          </div>
        </section>
        <section className="relative items-center justify-between mt-12 lg:flex lg:p-8">
          <div className="flex justify-center">
            <img src="" alt="" className="lg:w-full w-80" />
          </div>
          <div className="py-20 lg:w-1/2 lg:py-0">
            <p className="text-[#fb7a3f]">Our architects journey</p>
            <h1 className="text-[#054130] lg:text-5xl font-semibold pt-4 pb-6">
              Beautiful accoustics & <span className="underline decoration-[#fdca51]">Achievements</span> 
            </h1>
            <p className="font-light leading-8 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime odio voluptas tempora nihil voluptatem, magnam eaque blanditiis officia iusto asperiores voluptate placeat id! Illo inventore quae veniam maxime perferendis, ad necessitatibus eum eos quo, veritatis tempore ipsa, cumque numquam! Nihil.
            </p>
            <div className="flex items-center py-8 lg:gap-x-8">
              <button className="rounded-full px-4 py-2 flex items-center text-sm bg-[#fd7b47] text-white transition ease-out duration-300  transform hover:scale-110">
                <p className="">Read more</p>
                <IoMdArrowDropright className="text-xl"/>
              </button>
              <button className="flex items-center px-4 py-2 text-sm text-white transition duration-300 ease-out transform rounded-full hover:scale-110 ">
                <p className="">View Projects</p>
                <IoMdArrowDropright className="text-xl"/>
              </button>
            </div>
            <div className="flex justify-between gap-2 pt-4 lg:gap-0">
              <span className="">
                <h1 className="text-[#054130] text-4xl font-semibold">12</h1>
                <p className="w-1/2 text-sm lg:text-base">
                  Years of experience
                </p>
              </span>
              <span className="">
                <h1 className="text-[#054130] text-4xl font-semibold">246</h1>
                <p className="w-1/2 text-sm lg:text-base">
                  Projects completed
                </p>
              </span>
              <span className="">
                <h1 className="text-[#054130] text-4xl font-semibold">42</h1>
                <p className="w-1/2 text-sm lg:text-base">
                  Awards gained
                </p>
              </span>
            </div>
          </div>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 left-0 rotate-[315deg]"/>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute top-0 right-0 rotate-45"/>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 left-0 rotate-[225deg]"/>
          <IoIosArrowUp className="text-[#fb7a3f] text-4xl absolute bottom-0 right-0 rotate-[134deg]"/>
        </section>
      </div>
    </div>
    </>
  )
}

export default Work