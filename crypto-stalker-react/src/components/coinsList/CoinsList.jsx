import CoinRow from "../coinRow/CoinRow";
import { useCoins } from "../../contexts/CoinsContext";

const CoinsList = () => {
  const {coinsData, loading, error, selectedVsCurrency} = useCoins();

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