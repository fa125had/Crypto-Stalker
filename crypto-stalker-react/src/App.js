import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Pages
import WelcomePage from "./pages/welcomePage/WelcomePage";
import HomePage from "./pages/homePage/HomePage";
import CoinDetailPage from "./pages/coinDetailPage/CoinDetailPage";
import FavoritesPage from "./pages/favoritesPage/FavoritesPage";
// Contexts
import { VsCurrencyProvider } from "./contexts/VsCurrencyContext";
import { CoinsProvider } from "./contexts/CoinsContext";
import { ErrorProvider } from "./contexts/ErrorContext";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [screenSize, setScreenSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  // update the screen size
  const updateScreenSize = () => {
    setScreenSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  // Add event listener on mount, remove on unmount
  useEffect(() => {
    window.addEventListener("resize", updateScreenSize);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  // handle welcome screen
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
    <ErrorProvider>
      <VsCurrencyProvider>
        <CoinsProvider>
          <div className="App" style={screenSize}>
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
    </ErrorProvider>
  );
};

export default App;
