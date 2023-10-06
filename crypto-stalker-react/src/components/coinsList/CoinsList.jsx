import CoinRow from "../coinRow/CoinRow";
import { useCoins } from "../../contexts/CoinsContext";

const CoinsList = ({ searchQuery }) => {
  const { coinsData, loading, error, selectedVsCurrency } = useCoins();

  let filteredCoins = coinsData;

  if (searchQuery) {
    filteredCoins = coinsData.filter(
      (coin) =>
        coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="coin-data-container" id="coins-table">
        {filteredCoins.map((coin) => {
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
