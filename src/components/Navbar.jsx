import logo from "../assets/MarouaneBelkhdirLogo.png";
import { FaLinkedin, FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Left: Your Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="https://www.marouanedev.com">
          <img src={logo} alt="logo" className="h-10 cursor-pointer" />
        </a>
      </div>

      {/* Right: Fiverr Link */}
      <div className="flex items-center gap-2">
        <a
          href="https://www.fiverr.com/s/yvbB1PG"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-[#1DBF73]"
        >
          <span className="mr-2 font-medium">Hire Me</span>
          <FaExternalLinkSquareAlt className="text-xl" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;