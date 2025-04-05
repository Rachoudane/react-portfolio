import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      <div className="mx-auto px-4 sm:px-6 flex items-center justify-between py-3">
        {/* Logo - Left Side */}
        <div className="flex-shrink-0">
          <a href="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Fiverr Link - Right Side */}
        <div className="ml-auto pl-2">
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-900/40 hover:bg-purple-800/60 rounded-full px-3 py-1 transition-all"
          >
            <span className="text-xs sm:text-sm text-purple-100 mr-1">Hire</span>
            <SiFiverr className="text-purple-200 text-sm hover:text-[#1DBF73]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;