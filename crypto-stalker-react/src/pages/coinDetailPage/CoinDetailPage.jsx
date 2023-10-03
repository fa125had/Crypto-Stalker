import { Link, useParams } from "react-router-dom";
import { useVsCurrency } from "../../contexts/VsCurrencyContext";

const CoinDetailPage = () => {
  const { coinID } = useParams();
  const {selectedVsCurrency} = useVsCurrency();

  return (
    <div className="coin-detail-container">
      <h2>Detail</h2>
      <Link to={"/"}>Close</Link>
      <p>{coinID}/{selectedVsCurrency}</p>
    </div>
  );
};

export default CoinDetailPage;
