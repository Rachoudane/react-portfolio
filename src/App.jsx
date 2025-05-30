import { useEffect } from "react";
import logoRachouCorp from "./assets/logoRachouCorp.png";

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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f011d] via-[#1a052a] to-[#0f011d] text-purple-100 p-8">
      <div className="text-center space-y-6">
        <img
          src={logoRachouCorp}
          alt="RachouCorp Logo"
          className="mx-auto w-32 h-32 object-contain"
        />
        <h1 className="text-4xl sm:text-5xl font-bold">Site en maintenance</h1>
        <p className="text-lg sm:text-xl">
          Nous serons bientôt de retour ! Merci de votre patience.
        </p>
      </div>
    </div>
  );
};

export default App;
