import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCoins } from "../../contexts/CoinsContext";
import CoinLogo from "../../components/coinLogo/CoinLogo";
import BackButton from "../../components/backButton/BackButton";
import { useError } from "../../contexts/ErrorContext";
import { ClipLoader } from "react-spinners";

const CoinDetailPage = () => {
  const { coinsData, loading, selectedVsCurrency } = useCoins();
  const { coinID } = useParams();
  const [coin, setCoin] = useState();
  const { errorMessage, setErrorMessage } = useError();

  // check for errors
  useEffect(() => {
    if (errorMessage) {
      setErrorMessage(errorMessage);
    }
  }, [errorMessage, setErrorMessage]);

  // find the coin from stored data in session storage
  useEffect(() => {
    if (Array.isArray(coinsData)) {
      for (const coinObj of coinsData) {
        if (coinObj.id === coinID) {
          setCoin(coinObj);
        }
      }
    }
  }, [coinID, coinsData]);

  // loading
  if (loading || !coin || !coinsData) {
    return <ClipLoader />;
  }

  return (
    <div className="coin-detail-container">
      <h2>Detail</h2>
      <BackButton />
      <p>
        {coinID} / {selectedVsCurrency}. Price: {coin.current_price}
      </p>
      <CoinLogo src={coin.image} />
    </div>
  );
};

export default CoinDetailPage;
