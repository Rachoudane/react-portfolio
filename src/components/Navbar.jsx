import logo from "../assets/logoRachouCorp.png";
import { SiFiverr } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#14072e]/95 backdrop-blur-sm border-b border-[#3a1a6a]/30">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 gap-4">
          <a href="/" className="flex-shrink-0 w-20 md:w-24">
            <img 
              src={logo} 
              alt="Rachou Corp Logo" 
              className="w-full h-auto object-contain max-h-10 hover:opacity-90 transition-opacity"
            />
          </a>

          <a
            href="https://www.fiverr.com/s/yvbB1PG"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 rounded-full bg-[#3a1a6a]/50 px-3 py-1.5 text-sm transition-all hover:bg-[#4d2588]/60"
          >
            <span className="text-[#e8dfff] font-medium">Hire</span>
            <SiFiverr className="text-lg text-[#d4b9ff] hover:text-[#1DBF73]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;