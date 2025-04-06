import logo from "../assets/logoRachouCorp.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      {/* Strict width container */}
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo with constrained size */}
          <a href="/" className="flex-shrink-0 max-w-[120px] md:max-w-[140px]">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-full h-auto"
            />
          </a>

          {/* Fiverr Link with responsive text */}
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 rounded-full bg-purple-900/40 px-3 py-1.5 transition-all hover:bg-purple-800/60"
          >
            <span className="text-xs sm:text-sm text-purple-100">Hire Me</span>
            <SiFiverr className="text-sm sm:text-base text-purple-200 hover:text-[#1DBF73]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;