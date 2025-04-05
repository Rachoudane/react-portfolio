import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <a 
          href="https://www.marouanedev.com" 
          className="flex items-center hover:opacity-80 transition-opacity"
        >
          <img 
            src={logo} 
            alt="Marouane Belkhdir Logo" 
            className="h-10 w-auto" 
          />
        </a>

        {/* Right: Fiverr Link */}
        <div className="flex items-center space-x-6">
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-white hover:text-[#1DBF73] transition-colors"
          >
            <span className="hidden sm:inline-block mr-2 font-medium">Hire on Fiverr</span>
            <SiFiverr className="text-2xl" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;