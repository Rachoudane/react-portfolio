import { HEROABOUT_TEXT, ABOUT_TEXT } from "../constants";
import aboutImg from "../assets/about.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const HeroAbout = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <div className="flex flex-wrap items-center justify-center">
        {/* Text Content (Left) */}
        <motion.div 
          variants={container(0)}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-1/2 lg:pr-12"
        >
          <h1 className="text-5xl font-thin tracking-tight lg:text-7xl">
            Marouane Belkhdir
          </h1>
          
          <motion.span
            variants={container(0.3)}
            initial="hidden"
            animate="visible"
            className="block bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent my-4"
          >
            Mobile App Developer
          </motion.span>

          <motion.p
            variants={container(0.6)}
            initial="hidden"
            animate="visible"
            className="my-6 max-w-xl text-lg font-light leading-relaxed"
          >
            {HEROABOUT_TEXT}
          </motion.p>

          <motion.div
            variants={container(0.9)}
            initial="hidden"
            animate="visible"
            className="mt-8"
          >
            <p className="max-w-xl text-lg font-light leading-relaxed">
              {ABOUT_TEXT}
            </p>
          </motion.div>
        </motion.div>

        {/* Image (Right) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 mt-12 lg:mt-0"
        >
          <div className="flex justify-center lg:justify-start">
            <img 
              src={aboutImg} 
              alt="Marouane Belkhdir"
              className="rounded-2xl shadow-xl w-full max-w-md lg:max-w-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAbout;