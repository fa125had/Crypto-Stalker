import { useCoinGeckoAPI } from "../../hooks/useCoinGeckoAPI";
import CoinLogo from "../../components/coinLogo/CoinLogo";
import CoinName from "../../components/coinName/CoinName";
import CoinPrice from "../../components/coinPrice/CoinPrice";

const HomePage = () => {
  const { coinsData, loading, error } = useCoinGeckoAPI("usd");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="main-container">
      <section className="coin-data-container" id="coins-table">
        {coinsData.map((coin) => {
          return (
            <div key={`${coin.id}`}>
              <CoinLogo coinLogoSrc={coin.image} />
              <CoinName coinName={coin.name} />
              <CoinPrice coinPrice={coin.current_price} />
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default HomePage;
