import { useCoinGeckoAPI } from "../../hooks/useCoinGeckoAPI";
import { useState } from "react";
import CoinLogo from "../../components/coinLogo/CoinLogo";
import CoinName from "../../components/coinName/CoinName";
import CoinPrice from "../../components/coinPrice/CoinPrice";
import CoinSymbol from "../../components/coinSymbol/CoinSymbol";

const HomePage = () => {
  const [selectedVsCurrency, setSelectedVsCurrency] = useState("usd");

  const { coinsData, loading, error } = useCoinGeckoAPI(selectedVsCurrency);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const handleChange = ({ target }) => {
    setSelectedVsCurrency(target.value);
    console.log(`vs changed!`);
  };
  return (
    <main className="main-container">
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
            <div key={`${coin.id}`}>
              <CoinLogo coinLogoSrc={coin.image} />
              <CoinName coinName={coin.name} />
              <CoinSymbol coinSymbol={coin.symbol} />
              <CoinPrice
                coinPrice={coin.current_price}
                vsCurrency={selectedVsCurrency}
              />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
