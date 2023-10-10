import "./coinRow.css";
import CoinLogo from "../coinLogo/CoinLogo";
import CoinName from "../coinName/CoinName";
import CoinSymbol from "../coinSymbol/CoinSymbol";
import CoinPrice from "../coinPrice/CoinPrice";
import CoinRank from "../coinRank/CoinRank";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const CoinRow = ({ coin, vsCurrency }) => {
  const navigate = useNavigate();
  // list of favorites coins IDs
  const [favorites, setFavorites] = useLocalStorage("favorites", []);
  const [isFavorite, setIsFavorite] = useState(false);

  // check if the coin is in fav list or not
  useEffect(() => {
    setIsFavorite(favorites.includes(coin.id));
  }, [favorites, coin.id]);

  const toggleFavorite = () => {
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((fav) => fav !== coin.id);
    } else {
      updatedFavorites = [...favorites, coin.id];
    }
    setFavorites(updatedFavorites);
    setIsFavorite(!isFavorite);
  };

  const handleClick = ({ target }) => {
    navigate(`/${coin.id}`);
  };

  // manage vsCurrency logo
  let vsCurrencyLogo = "";
  if (vsCurrency === "usd") {
    vsCurrencyLogo = "$";
  } else if (vsCurrency === "eur") {
    vsCurrencyLogo = "€";
  } else if (vsCurrency === "btc") {
    vsCurrencyLogo = "₿";
  }

  const formatNumbers = (number) => {
    if (number && Math.abs(number) < 1) {
      return number.toFixed(9);
    } else if (number){
      return number.toFixed(2);
    }
  };

  return (
    <div key={coin.id} className="coin-row">
      <div className="fav-img-wrapper">
        <img
          className="favorite-icon"
          src={
            isFavorite
              ? "/assets/images/favorite-filled.svg"
              : "/assets/images/favorite-regular.svg"
          }
          alt="favorite"
          onClick={toggleFavorite}
        />
      </div>
      <span className="coin-info" onClick={handleClick}>
        <div className="rank-wrapper">
          <CoinRank coinRank={coin.market_cap_rank} />
        </div>

        <div className="logo-wrapper">
          <CoinLogo src={coin.image} name={coin.name} />
        </div>

        <div className="name-wrapper">
          <CoinName name={coin.name} />
          <CoinSymbol coinSymbol={coin.symbol} />
        </div>

        <div className="price-wrapper">
          <span className="vsCurrency">{vsCurrencyLogo}</span>
          <CoinPrice coinPrice={coin.current_price} />
        </div>

        <div className="marketCap-wrapper">
          <p>{(coin.market_cap / 1000000).toFixed(2)}m</p>
        </div>

        <div className="profit-loss-24h">
          <div className="percentage">{coin.price_change_percentage_24h}%</div>
          <div className="amount">
            {formatNumbers(coin.price_change_24h)}
            {vsCurrencyLogo}
          </div>
        </div>
      </span>
    </div>
  );
};

export default CoinRow;
