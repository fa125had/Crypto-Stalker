import { useLocalStorage } from "@uidotdev/usehooks";
import { useCoins } from "../../contexts/CoinsContext";
import CoinRow from "../coinRow/CoinRow";
import { useError } from "../../contexts/ErrorContext";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const FavoritesCoins = ({ searchQuery, setSearchQuery }) => {
  // retrieve all coins data from session storage
  const { coinsData, loading, selectedVsCurrency } = useCoins();
  // error handler context
  const { errorMessage, setErrorMessage } = useError();
  // load fav coins Ids from local storage
  const [favorites] = useLocalStorage("favorites");

  // check for errors
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(errorMessage);
    }
  }, [errorMessage, setErrorMessage]);

  let filteredCoins = [];
  if (coinsData && favorites) {
    filteredCoins = coinsData.filter((coin) => favorites.includes(coin.id));

    if (searchQuery) {
      filteredCoins = filteredCoins.filter(
        (coin) =>
          // match with coin's id
          coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
          // match with coin's name
          coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          // match with coin's symbol
          coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
  }

  // loading
  if (loading || !coinsData) {
    return <ClipLoader />;
  }

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
