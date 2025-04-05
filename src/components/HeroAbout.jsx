import { HEROABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: 100, opacity: 0 }, // Changed to animate from right
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const HeroAbout = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      <div className="flex flex-wrap items-center justify-center">
        {/* Image (Left) - Now appears first in DOM but stays left on desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 lg:order-first" // Added order-first
        >
          <div className="flex justify-center lg:justify-end"> {/* Align right on desktop */}
            <img 
              src={aboutImg} 
              alt="Marouane Belkhdir"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg"
            />
          </div>
        </motion.div>

        {/* Text Content (Right) */}
        <motion.div 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:pl-8 mt-8 lg:mt-0" // Changed to pl-8
        >
          <h1 className="text-4xl font-thin tracking-tight lg:text-6xl">
            Marouane Belkhdir
          </h1>
          
          <motion.span
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent my-2"
          >
            Flutter Developer
          </motion.span>

          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="my-4 max-w-xl text-base font-light leading-snug whitespace-pre-line"
          >
            {HEROABOUT_TEXT}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;