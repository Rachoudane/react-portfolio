import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';

    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f011d] via-[#1a052a] to-[#0f011d] text-purple-100">
      <Navbar currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />

      <main className="pt-24 pb-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          <HeroAbout currentLanguage={currentLanguage} />
          <Technologies currentLanguage={currentLanguage} />
          <Projects currentLanguage={currentLanguage} />
          <Contact currentLanguage={currentLanguage} />
        </div>
      </main>
    </div>
  );
};

export default App;