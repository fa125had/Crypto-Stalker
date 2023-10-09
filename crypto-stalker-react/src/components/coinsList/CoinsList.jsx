import CoinRow from "../coinRow/CoinRow";
import { useCoins } from "../../contexts/CoinsContext";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import { useError } from "../../contexts/ErrorContext";

const CoinsList = ({ searchQuery }) => {
  // states for pagination - start page
  const [currentPage, setCurrentPage] = useState(1);
  // states for pagination - coins per page
  const [coinsPerPage] = useState(10);
  // error handler context
  const { errorMessage, setErrorMessage } = useError();
  // coins data context
  const { coinsData, loading, selectedVsCurrency } = useCoins();

  // check for errors
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(errorMessage);
    }
  }, [errorMessage, setErrorMessage]);

  // Reset currentPage to 1 whenever searchQuery changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  let filteredCoins = coinsData || [];

  // filter coins based on search query
  if (searchQuery && coinsData) {
    filteredCoins = coinsData.filter(
      (coin) =>
        // match with coin's id
        coin.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // match with coin's name
        coin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        // match with coin's symbol
        coin.symbol.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // pagination
  // calculate total pages for all coins
  const totalPages = Math.ceil(filteredCoins.length / coinsPerPage);

  // last coin's index
  const indexOfLastCoin = currentPage * coinsPerPage;
  // first coin's index
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  // extract coins between first and last index
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);

  // loading
  if (loading || !coinsData) {
    return <ClipLoader />;
  }

  return (
    <>
      <section className="coin-data-container" id="coins-table">
        {currentCoins.map((coin) => {
          return (
            <CoinRow
              key={coin.id}
              coin={coin}
              vsCurrency={selectedVsCurrency}
            />
          );
        })}
      </section>
      <div>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
      </div>
    </>
  );
};

export default CoinsList;
