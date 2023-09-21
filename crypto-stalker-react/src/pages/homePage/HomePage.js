import { useCoinGeckoAPI } from "../../hooks/useCoinGeckoAPI";
import { useState, useEffect } from "react";
import CoinRow from "../../components/coinRow/CoinRow";

const HomePage = () => {
  const [selectedVsCurrency, setSelectedVsCurrency] = useState("usd");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { coinsData, loading, error } = useCoinGeckoAPI(
    selectedVsCurrency,
    isOnline
  );

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      setIsOnline(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = ({ target }) => {
    setSelectedVsCurrency(target.value);
    console.log(`vs changed!`);
  };
  return (
    <main className="main-container">
      <h2>{isOnline ? "✅ Online" : "❌ Disconnected"}</h2>
      <span className="currency-selector-container">
        <select
          id="currency-selector"
          value={selectedVsCurrency}
          onChange={handleChange}
        >
          <option value="usd">USD</option>
          <option value="btc">BTC</option>
          <option value="eur">Eur</option>
        </select>
      </span>
      <section className="coin-data-container" id="coins-table">
        {coinsData.map((coin) => {
          return (
            <CoinRow
              key={coin.id}
              coin={coin}
              vsCurrency={selectedVsCurrency}
            />
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
