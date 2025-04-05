import logo from "../assets/MarouaneBelkhdirLogo.png";
import { FaFiverr } from "react-icons/fa"; // Import Fiverr icon (install if needed)

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left: Your Logo (links to your website) */}
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.marouanedev.com">
          <img src={logo} alt="logo" className="cursor-pointer h-10" /> {/* Adjust height as needed */}
        </a>
      </div>

      {/* Right: Fiverr Gig Link (with icon) */}
      <div className="flex items-center space-x-4">
        <a
          href="https://www.fiverr.com/s/yvbB1PG"
          target="_blank" // Opens in new tab
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-[#1DBF73] transition-colors" // Fiverr green on hover
        >
          <span className="mr-2 font-medium">Hire Me</span> {/* Optional text */}
          <FaFiverr className="text-2xl" /> {/* Fiverr icon */}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;