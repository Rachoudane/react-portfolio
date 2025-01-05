import logo from "../assets/MarouaneBelkhdirLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="logo" />
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/marouanebelkhdir/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            {/* Wrap GitHub icon in anchor tag to redirect */}
            <a href="https://github.com/Rachoudane" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    </nav>
  );
};

export default Navbar;
