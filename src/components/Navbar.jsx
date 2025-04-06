import logo from "../assets/logoRachouCorp.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo - Controlled sizing */}
          <a href="/" className="flex-shrink-0 w-24 md:w-32"> {/* Fixed width */}
            <img 
              src={logo} 
              alt="Logo" 
              className="w-full h-auto object-contain" 
            />
          </a>

          {/* Fiverr Link - Enhanced visibility */}
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-purple-900/40 px-4 py-2 transition-all hover:bg-purple-800/60"
          >
            <span className="text-sm sm:text-base text-purple-100 font-medium">
              Hire Me
            </span>
            <SiFiverr className="text-xl text-purple-200 hover:text-[#1DBF73]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;