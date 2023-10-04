import { useLocalStorage } from "@uidotdev/usehooks";
import { useCoins } from "../../contexts/CoinsContext";
import CoinRow from "../coinRow/CoinRow";

const FavoritesCoins = () => {
  // retrieve all coins data from session storage
  const { coinsData, loading, error, selectedVsCurrency } = useCoins();
  // load fav coins Ids from local storage
  const [favorites] = useLocalStorage("favorites");

  let filteredCoins = [];
  if (coinsData && favorites) {
    filteredCoins = coinsData.filter((coin) => favorites.includes(coin.id));
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

export default FavoritesCoins;
