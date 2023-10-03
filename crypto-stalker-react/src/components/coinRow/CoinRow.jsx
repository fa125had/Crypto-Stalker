import "./coinRow.css";
import CoinLogo from "../coinLogo/CoinLogo";
import CoinName from "../coinName/CoinName";
import CoinSymbol from "../coinSymbol/CoinSymbol";
import CoinPrice from "../coinPrice/CoinPrice";
import CoinRank from "../coinRank/CoinRank";
import { useNavigate } from "react-router-dom";

const CoinRow = ({ coin, vsCurrency }) => {
  const navigate = useNavigate();

  const handleClick = ({ target }) => {
    console.log(`${coin.id}'s row clicked.`);
    navigate(`/${coin.id}`);
  };

  return (
    <div key={coin.id} className="coin-row" onClick={handleClick}>
      <CoinLogo src={coin.image} name={coin.name} />
      <CoinRank coinRank={coin.market_cap_rank} />
      <CoinName name={coin.name} />
      <CoinSymbol coinSymbol={coin.symbol} />
      <CoinPrice coinPrice={coin.current_price} vsCurrency={vsCurrency} />
    </div>
  );
};

export default CoinRow;
