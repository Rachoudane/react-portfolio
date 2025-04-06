import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { SiGmail, SiLinkedin, SiGithub, SiFiverr } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-24 relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1 }}
        className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"
      />
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20"
      />

      <motion.h1 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }} 
        className="my-16 text-center text-4xl font-thin tracking-tight md:text-5xl"
      >
        Get in <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
      </motion.h1>

      <div className="max-w-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <HiLocationMarker className="text-2xl text-purple-400" />
              <p className="text-neutral-300">{CONTACT.address}</p>
            </div>

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-xl text-cyan-400" />
              <p className="text-neutral-300">{CONTACT.phoneNo}</p>
            </div>

            <div className="flex items-center gap-4">
              <SiGmail className="text-2xl text-red-400" />
              <a 
                href={`mailto:${CONTACT.email}`} 
                className="text-neutral-300 hover:text-purple-400 transition-colors border-b border-transparent hover:border-purple-400"
              >
                {CONTACT.email}
              </a>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <a 
              href={CONTACT.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-2 rounded-lg bg-purple-600/10 border border-purple-600/20 group-hover:bg-purple-600/20 transition-colors">
                <SiGithub className="text-2xl text-purple-400" />
              </div>
              <span className="text-neutral-300 group-hover:text-purple-400 transition-colors">
                GitHub Profile
              </span>
            </a>

            <a 
              href={CONTACT.fiverr} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="p-2 rounded-lg bg-green-600/10 border border-green-600/20 group-hover:bg-green-600/20 transition-colors">
                <SiFiverr className="text-2xl text-green-400" />
              </div>
              <span className="text-neutral-300 group-hover:text-green-400 transition-colors">
                Fiverr Profile
              </span>
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            />
            <textarea 
              placeholder="Your Message" 
              rows="4"
              className="w-full bg-neutral-900/50 border border-neutral-800 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            ></textarea>
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-cyan-600 text-white py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;