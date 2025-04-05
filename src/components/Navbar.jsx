import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4">
        {/* Logo - Left Side */}
        <a href="/" className="z-50">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 md:h-10 transition-all duration-300 hover:opacity-80"
          />
        </a>

        {/* Fiverr Link - Not too far right */}
        <div className="flex-1 flex justify-end pr-2">
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 md:space-x-2 bg-purple-900/30 hover:bg-purple-800/50 rounded-full px-3 py-1 md:px-4 md:py-2 transition-all duration-300"
          >
            <span className="text-xs md:text-sm font-medium text-purple-200">
              Hire Me
            </span>
            <SiFiverr className="text-sm md:text-xl text-purple-300 hover:text-[#1DBF73] transition-colors" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;