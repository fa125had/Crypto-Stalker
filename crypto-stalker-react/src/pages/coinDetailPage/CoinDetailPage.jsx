import { Link, useParams } from "react-router-dom";
import { useCoins } from "../../contexts/CoinsContext";
import { useState, useEffect } from "react";
import CoinLogo from "../../components/coinLogo/CoinLogo";

const CoinDetailPage = () => {
  const { coinsData, loading, error, selectedVsCurrency } = useCoins();
  const { coinID } = useParams();
  const [coin, setCoin] = useState();

  useEffect(() => {
    for (const coinObj of coinsData) {
      if (coinObj.id === coinID) {
        setCoin(coinObj);
      }
    }
  }, [coinID, coinsData]);

  if (loading || !coin) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="coin-detail-container">
      <h2>Detail</h2>
      <Link to={"/"}>Close</Link>
      <p>
        {coinID} / {selectedVsCurrency}. Price: {coin.current_price}
      </p>
      <CoinLogo src={coin.image} />
    </div>
  );
};

export default CoinDetailPage;
