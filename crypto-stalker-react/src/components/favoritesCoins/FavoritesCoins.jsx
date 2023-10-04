// import { useLocalStorage } from "@uidotdev/usehooks";
import { useCoins } from "../../contexts/CoinsContext";
import CoinRow from "../coinRow/CoinRow";
import { useEffect, useState } from "react";

const FavoritesCoins = () => {
  // retrieve all coins data from session storage
  const { coinsData, loading, error, selectedVsCurrency } = useCoins();
  // filtered coins base on favorites
  const [favCoins, setFavCoins] = useState(null);
  // load fav coins Ids from local storage
  const favorites = localStorage.getItem("favorites");

  useEffect(() => {
    if (coinsData) {
      const filteredCoins = coinsData.filter((coin) =>
        favorites.includes(coin.id)
      );
      setFavCoins(filteredCoins);
    }
  }, [coinsData, favorites]);

  if (loading || !favCoins) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <section className="coin-data-container" id="coins-table">
        {favCoins.map((coin) => {
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
