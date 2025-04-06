import logo from "../assets/logoRachouCorp.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1a052a]/90 backdrop-blur-sm border-b border-purple-900/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4"> {/* Reduced py-3 to py-2 */}
          {/* Logo - Smaller container */}
          <a href="/" className="flex-shrink-0 w-20 md:w-24"> {/* Reduced width */}
            <img 
              src={logo} 
              alt="Rachou Corp Logo" 
              className="w-full h-auto object-contain max-h-10" /* Added max-height */
            />
          </a>

          {/* Fiverr Link - Compact but visible */}
          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-purple-900/40 px-3 py-1.5 text-sm transition-all hover:bg-purple-800/60"
          >
            <span className="text-purple-100 font-medium">Hire</span>
            <SiFiverr className="text-lg text-purple-200 hover:text-[#1DBF73]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;