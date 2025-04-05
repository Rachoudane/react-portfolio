import { HEROABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const HeroAbout = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <div className="flex flex-wrap items-stretch"> {/* Changed to items-stretch */}
        {/* Image (Left) - Height-matched container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:order-first flex items-center" // Added flex items-center
        >
          <div className="w-full flex justify-center lg:justify-end h-full">
            <img 
              src={aboutImg} 
              alt="Marouane Belkhdir"
              className="rounded-2xl shadow-xl object-cover h-full max-h-[500px] w-auto max-w-full" // Added h-full and max-h
              style={{ aspectRatio: "3/4" }} // Adjust to match your image proportions
            />
          </div>
        </motion.div>

        {/* Text Content (Right) - Height-matched */}
        <motion.div 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:pl-10 flex flex-col justify-center" // Added flex layout
        >
          <div className="py-6 lg:py-0"> {/* Added vertical padding */}
            <h1 className="text-4xl font-thin tracking-tight lg:text-6xl">
              Marouane Belkhdir
            </h1>
            
            <motion.span
              variants={container(0.3)}
              initial="hidden"
              animate="visible"
              className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent my-3"
            >
              Flutter Developer & UI Specialist
            </motion.span>

            <motion.p
              variants={container(0.6)}
              initial="hidden"
              animate="visible"
              className="text-base font-light leading-relaxed whitespace-pre-line"
            >
              {HEROABOUT_TEXT}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;