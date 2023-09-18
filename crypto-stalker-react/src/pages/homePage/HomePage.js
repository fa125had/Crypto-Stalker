import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [vsCurrency, setVsCurrency] = useState("usd");

  useEffect(() => {
    // Fetch your coins data here and set it to state
    // setCoinsData(fetchedData);
  }, []);

  const formatNumberWithCommas = (number) => {
    // Your existing logic
  };

  const profitLossStyle = (change) => {
    // Your existing logic
  };

  return (
    <main className="main-container">
      <section className="live-data-container" id="coins-table">
        {coinsData.map((coin) => (
          <div key={coin.symbol} className="coin-data-container">
            <div className="coin-image-container">
              <img className="coin-image" src={coin.image} alt={coin.name} />
              <p className="coin-rank">{coin.market_cap_rank}</p>
            </div>
            <div className="coin-name-container">
              <p className="coin-name">
                {coin.symbol}
                <span className="vs-currency">{vsCurrency}</span>
              </p>
              <p className="coin-name-sub">
                {coin.name} /<span className="vs-currency">{vsCurrency}</span>
              </p>
            </div>
            <div className="coin-price-container">
              <p className="coin-price" id={`${coin.symbol}-current-price`}>
                {formatNumberWithCommas(coin.current_price)}
              </p>
              <div className="coin-price-change">
                <p
                  className={`coin-price-change-price ${profitLossStyle(
                    coin.price_change_24h
                  )}`}
                  id={`${coin.symbol}-price-change24-price`}
                >
                  {formatNumberWithCommas(coin.price_change_24h)}
                </p>
                <p
                  className={`coin-price-change-percentage ${profitLossStyle(
                    coin.price_change_24h
                  )}`}
                  id={`${coin.symbol}-price-change24-percentage`}
                >
                  {formatNumberWithCommas(coin.price_change_percentage_24h)} %
                </p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HomePage;
