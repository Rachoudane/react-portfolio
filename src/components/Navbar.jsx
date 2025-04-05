import logo from "../assets/MarouaneBelkhdirLogo.png";
import { SiFiverr } from "react-icons/si"; // Correct import from "si" package

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left: Your Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.marouanedev.com">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </a>
      </div>

      {/* Right: Fiverr Gig Link */}
      <div className="flex items-center gap-2">
        <a
          href="https://www.fiverr.com/s/yvbB1PG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-[#1DBF73] transition-colors"
        >
          <span className="mr-2 font-medium">Hire Me</span>
          <SiFiverr className="text-2xl" /> {/* Correct Fiverr icon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;