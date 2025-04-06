import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    // Add critical overflow control
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f011d] via-[#1a052a] to-[#0f011d] text-purple-100">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Strict container matching navbar */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
          <HeroAbout/>
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;