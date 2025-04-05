import logo from "../assets/MarouaneBelkhdirLogo.png";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
        <a href="https://www.marouanedev.com" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </a>
        </div>
    </nav>
  );
};

export default Navbar;
