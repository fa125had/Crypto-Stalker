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
      for (const coin of coinsData) {
        if (coin.id === coinID) {
          setCoin(coin);
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
      <div>
        <span className="ath">
          <p>ATH: {coin.ath}</p>
          <p>ATH changes(%): {coin.ath_change_percentage}</p>
          <p>ATH Date: {coin.ath_date}</p>
        </span>
        <span className="atl">
          <p>ATL: {coin.atl}</p>
          <p>ATL changes(%): {coin.atl_change_percentage}</p>
          <p>ATL Date: {coin.atl_date}</p>
        </span>
        <span className="market-cap">
          <p>Market Cap: {coin.market_cap}</p>
          <p>Market Cap Rank: {coin.market_cap_rank}</p>
          <p>Market Cap changes 24h: {coin.market_cap_change_24h}</p>
          <p>
            Market Cap changes 24h(%): {coin.market_cap_change_percentage_24h}
          </p>
        </span>
        <span className="supply">
          <p>Circulating supply: {coin.circulating_supply}</p>
          <p>Current Price: {coin.current_price}</p>
          <p>Fully diluted valuation: {coin.fully_diluted_valuation}</p>
          <p>Max Supply: {coin.max_supply}</p>
          <p>Total supply: {coin.total_supply}</p>
          <p>Total volume: {coin.total_volume}</p>
        </span>
        {coin.roi && (
          <span className="roi">
            <p>ROI: </p>
            <p>Currency:{coin.roi.currency} </p>
            <p>Percentage:{coin.roi.percentage} </p>
            <p>Times:{coin.roi.times} </p>
          </span>
        )}
        <span className="info">
          <p>Name: {coin.name}</p>
          <p>Symbol: {coin.symbol}</p>
        </span>
        <span className="changes-24h">
          <p>High 24h: {coin.high_24h}</p>
          <p>Low 24h: {coin.low_24h}</p>
          <p>Price changes 24h: {coin.price_change_24h} </p>
          <p>Price changes 24h(%): {coin.price_change_percentage_24h}</p>
        </span>
        <span className="last-update">
          <p>Last Update: {coin.last_updated}</p>
        </span>
      </div>
    </div>
  );
};

export default CoinDetailPage;
