import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      <div className="mx-auto flex items-center justify-center py-3 px-4 sm:px-6">
        {/* Logo - Centered */}
        <div className="absolute left-4 sm:left-6">
          <a href="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto hover:opacity-80 transition-opacity"
            />
          </a>
        </div>

        {/* Fiverr Link - Centered */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-purple-900/40 hover:bg-purple-800/60 rounded-full px-4 py-1.5 transition-all"
          >
            <span className="text-sm text-purple-100 mr-2">Hire Me</span>
            <SiFiverr className="text-purple-200 hover:text-[#1DBF73] text-base" />
          </a>
        </div>

        {/* Spacer for balance */}
        <div className="invisible w-8 h-8 sm:w-10 sm:h-10"></div>
      </div>
    </nav>
  );
};

export default Navbar;