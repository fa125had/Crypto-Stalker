import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCoins } from "../../contexts/CoinsContext";
import CoinLogo from "../../components/coinLogo/CoinLogo";
import BackButton from "../../components/backButton/BackButton";

const CoinDetailPage = () => {
  const { coinsData, loading, error, selectedVsCurrency } = useCoins();
  const { coinID } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    if (Array.isArray(coinsData)) {
      for (const coinObj of coinsData) {
        if (coinObj.id === coinID) {
          setCoin(coinObj);
        }
      }
    }
  }, [coinID, coinsData]);

  if (loading || !coin || !coinsData) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
