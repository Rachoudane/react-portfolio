import { SiFlutter } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { SiDotnet } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      
      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {/* Flutter Stack - Primary Skills */}
        <motion.div 
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-purple-500/20 p-4 bg-purple-500/10"
        >
          <SiFlutter className="text-7xl text-purple-400" />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-blue-500/20 p-4 bg-blue-500/10"
        >
          <SiDart className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div 
          variants={iconVariants(2.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-amber-500/20 p-4 bg-amber-500/10"
        >
          <SiFirebase className="text-7xl text-amber-400" />
        </motion.div>

        {/* Additional Skills */}
        <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-700/20 p-4 bg-neutral-700/10"
        >
          <RiReactjsFill className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800/20 p-4 bg-neutral-800/10"
        >
          <TbBrandCSharp className="text-7xl text-purple-600" />
        </motion.div>

        <motion.div 
          variants={iconVariants(3.7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800/20 p-4 bg-neutral-800/10"
        >
          <SiDotnet className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div 
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-sky-500/20 p-4 bg-sky-500/10"
        >
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;