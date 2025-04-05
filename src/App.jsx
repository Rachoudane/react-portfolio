import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Set page title
    document.title = "Marouane Dev | Portfolio";
    
    // Dynamic favicon (optional)
    const changeFavicon = () => {
      const link = document.querySelector("link[rel~='icon']") || document.createElement('link');
      link.rel = 'icon';
      link.href = '/favicon.ico';
      document.head.appendChild(link);
    };
    changeFavicon();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-800 text-neutral-300 antialiased">
      {/* Fixed Background */}
      <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-800 opacity-95" />
      
      {/* Navbar (fixed) */}
      <Navbar />
      
      {/* Main Content (with navbar offset) */}
      <main className="pt-24 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default App;