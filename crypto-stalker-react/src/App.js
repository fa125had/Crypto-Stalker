import "./App.css";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import { useState, useEffect } from "react";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the welcome page
    const hasSeenWelcomePage = sessionStorage.getItem("hasSeenWelcome");

    if (!hasSeenWelcomePage) {
      setShowWelcome(true);
      sessionStorage.setItem("hasSeenWelcome", "true");

      // Set timer for remove WelcomePage
      const timerID = setTimeout(() => {
        setShowWelcome(false);
      }, 5000);

      // Clear timer
      return () => clearTimeout(timerID);
    }
  }, []);

  return (
    <div className="App">{showWelcome ? <WelcomePage /> : <HomePage />}</div>
  );
};

export default App;
