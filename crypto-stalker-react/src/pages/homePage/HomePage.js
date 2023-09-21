import { useCoinGeckoAPI } from "../../hooks/useCoinGeckoAPI";
import { useState } from "react";
import CoinRow from "../../components/coinRow/CoinRow";
import Header from "../../components/header/Header";

const HomePage = () => {
  const [selectedVsCurrency, setSelectedVsCurrency] = useState("usd");
  const { coinsData, loading, error } = useCoinGeckoAPI(selectedVsCurrency);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="main-container">
      <Header
        setSelectedVsCurrency={setSelectedVsCurrency}
        selectedVsCurrency={selectedVsCurrency}
      />

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
