import "./App.css";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import CoinDetailPage from "./pages/coinDetailPage/CoinDetailPage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
      }, 5500);

      // Clear timer
      return () => clearTimeout(timerID);
    }
  }, []);

  return (
    <div className="App">
      {showWelcome ? (
        <WelcomePage />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/:coinSymbol" element={<CoinDetailPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
};

export default App;
