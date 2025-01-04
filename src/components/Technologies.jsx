import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandCSharp className="text-7xl text-neutral-200"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiDotnet className="text-7xl text-blue-800"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaUnity className="text-7xl text-neutral-600"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaJava className="text-7xl text-white"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsFill className="text-7xl text-cyan-400"/>
            </div>

            <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiTailwindCssFill className="text-7xl text-blue-400"/>
            </div>

        </div>
    </div>
  )
}

export default Technologies