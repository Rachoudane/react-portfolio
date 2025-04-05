import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <a href="/" className="group transition-all duration-300">
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
          className="flex items-center space-x-2 group transition-all duration-300"
        >
          <span className="text-sm font-medium text-purple-300 group-hover:text-purple-100 transition-colors duration-300">
            Hire Me
          </span>
          <SiFiverr className="text-xl text-purple-400 group-hover:text-[#1DBF73] transition-colors duration-300" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;