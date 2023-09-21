import "./coinRow.css";
import CoinLogo from "../coinLogo/CoinLogo";
import CoinName from "../coinName/CoinName";
import CoinSymbol from "../coinSymbol/CoinSymbol";
import CoinPrice from "../coinPrice/CoinPrice";

const CoinRow = ({ coin, vsCurrency }) => {
  const handleClick = ({ target }) => {
    console.log(`Row ${coin.id} clicked.`);
  };

  return (
    <div key={coin.id} className="coin-row" onClick={handleClick}>
      <CoinLogo coinLogoSrc={coin.image} />
      <CoinName coinName={coin.name} />
      <CoinSymbol coinSymbol={coin.symbol} />
      <CoinPrice coinPrice={coin.current_price} vsCurrency={vsCurrency} />
    </div>
  );
};

export default CoinRow;
