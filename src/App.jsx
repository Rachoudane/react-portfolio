import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroAbout from "./components/HeroAbout";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    document.title = "Marouane Dev | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f011d] via-[#1a052a] to-[#0f011d] text-purple-100 transition-colors duration-500">
      {/* Navbar */}
      <Navbar />
      
      {/* Content */}
      <main className="pt-24 pb-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          <HeroAbout/>
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
};

export default App;