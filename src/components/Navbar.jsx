import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md">
      {/* Gradient border bottom */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="group">
          <img 
            src={logo} 
            alt="Logo" 
            className="h-10 transition-all duration-300 group-hover:opacity-80"
          />
        </a>

        {/* Fiverr Link */}
        <a
          href="https://www.fiverr.com/s/yvbB1PG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 group"
        >
          <span className="text-sm font-medium text-gray-300 group-hover:text-cyan-400 transition-colors">
            Hire Me
          </span>
          <SiFiverr className="text-xl text-gray-400 group-hover:text-[#1DBF73] transition-colors" />
        </a>
      </div>
    </nav>
  );
};