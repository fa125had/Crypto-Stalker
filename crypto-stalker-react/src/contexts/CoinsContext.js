import { createContext, useContext } from "react";
import { useVsCurrency } from "./VsCurrencyContext";
import { useCoinGeckoAPI } from "../hooks/useCoinGeckoAPI";

const CoinsContext = createContext();

export const CoinsProvider = ({ children }) => {
  const { selectedVsCurrency } = useVsCurrency();

  // Load Coin Data
  const { coinsData, loading, error } = useCoinGeckoAPI(selectedVsCurrency);

  return (
    <CoinsContext.Provider
      value={{ coinsData, loading, error, selectedVsCurrency }}
    >
      {children}
    </CoinsContext.Provider>
  );
};

export const useCoins = () => {
  const context = useContext(CoinsContext);
  if (!context) {
    throw new Error("Error context");
  }
  return context;
};
