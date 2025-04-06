import logo from "../assets/logoRachouCorp.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      {/* Container matches your content width */}
      <div className="mx-auto w-full max-w-[calc(100vw-2rem)] px-4 sm:max-w-[calc(100vw-3rem)] sm:px-6 lg:max-w-7xl">
        <div className="flex items-center justify-between py-3">
          {/* Logo - Left aligned but not touching edge */}
          <a href="/" className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-8 w-auto hover:opacity-80 transition-opacity md:h-10"
            />
          </a>

          {/* Fiverr Link - Right aligned with safe spacing */}
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 rounded-full bg-purple-900/40 px-3 py-1.5 transition-all hover:bg-purple-800/60 sm:space-x-2 sm:px-4"
          >
            <span className="text-xs text-purple-100 sm:text-sm">Hire Me</span>
            <SiFiverr className="text-sm text-purple-200 hover:text-[#1DBF73] sm:text-base" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;