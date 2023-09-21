import { useCoinGeckoAPI } from "../../hooks/useCoinGeckoAPI";
import CoinRow from "../coinRow/CoinRow";

const CoinsList = ({ selectedVsCurrency }) => {
  // Load Coin Data
  const { coinsData, loading, error } = useCoinGeckoAPI(selectedVsCurrency);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
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
    </>
  );
};

export default CoinsList;
