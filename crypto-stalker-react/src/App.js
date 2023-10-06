import "./App.css";
import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import CoinDetailPage from "./pages/coinDetailPage/CoinDetailPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { VsCurrencyProvider } from "./contexts/VsCurrencyContext";
import { CoinsProvider } from "./contexts/CoinsContext";

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
    <VsCurrencyProvider>
      <CoinsProvider>
        <div className="App">
          {showWelcome ? (
            <WelcomePage />
          ) : (
            <Router>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:coinID" element={<CoinDetailPage />} />
                <Route path="/favList" element={<FavoritesPage />} />
              </Routes>
            </Router>
          )}
        </div>
      </CoinsProvider>
    </VsCurrencyProvider>
  );
};

export default App;
