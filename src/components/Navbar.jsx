import { useState } from 'react';
import { SiFiverr } from "react-icons/si";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logoRachouCorp.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('en'); // 'en' or 'fr'

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'fr' : 'en');
    setIsOpen(false);
    // You'll add language change logic here
  };

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

          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-1 px-2 py-1 rounded-md hover:bg-[#3a1a6a]/30 transition-colors"
              >
                {currentLanguage === 'en' ? (
                  <span className="text-xs">🇬🇧</span>
                ) : (
                  <span className="text-xs">🇫🇷</span>
                )}
                <FaChevronDown className={`text-xs transition-transform ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-[#1a0937] border border-[#3a1a6a]/50 rounded-md shadow-lg overflow-hidden z-50">
                  <button
                    onClick={toggleLanguage}
                    className="w-full px-3 py-2 text-left text-sm hover:bg-[#3a1a6a]/50 flex items-center gap-2"
                  >
                    {currentLanguage === 'en' ? (
                      <>
                        <span>FR</span>
                        <span>Français</span>
                      </>
                    ) : (
                      <>
                        <span>EN</span>
                        <span>English</span>
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Fiverr Link */}
            <a
              href="https://www.fiverr.com/s/yvbB1PG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 rounded-full bg-[#3a1a6a]/50 px-3 py-1.5 text-sm transition-all hover:bg-[#4d2588]/60"
            >
              <span className="text-[#e8dfff] font-medium">
                {currentLanguage === 'en' ? 'Hire me' : 'Embauchez moi'}
              </span>
              <SiFiverr className="text-lg text-[#d4b9ff] hover:text-[#1DBF73]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;