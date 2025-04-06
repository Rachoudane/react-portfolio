import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    
    return () => {
      document.documentElement.style.overflowX = '';
      document.body.style.overflowX = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d021b] via-[#1a0937] to-[#0d021b] text-[#f5f0ff]">
      <Navbar />
      
      <main className="pt-28 pb-12">
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