import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [language, setLanguage] = useState('en');
  
  useEffect(() => {
    // Add critical overflow control
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    // Set initial language from localStorage or browser preference
    const savedLanguage = localStorage.getItem('portfolioLanguage');
    const browserLanguage = navigator.language.split('-')[0];
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else if (browserLanguage === 'fr') {
      setLanguage('fr');
    }
    
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'fr' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('portfolioLanguage', newLanguage);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f011d] via-[#1a052a] to-[#0f011d] text-purple-100">
      <Navbar 
        toggleLanguage={toggleLanguage} 
        currentLanguage={language} 
      />
      
      <main className="pt-24 pb-12">
        {/* Strict container matching navbar */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          <HeroAbout language={language} />
          <Technologies language={language} />
          <Projects language={language} />
          <Contact language={language} />
        </div>
      </main>
    </div>
  );
};

export default App;