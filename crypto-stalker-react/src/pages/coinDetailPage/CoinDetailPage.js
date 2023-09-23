// import CoinLogo from "../../components/coinLogo/CoinLogo";
import { Link, useParams } from "react-router-dom";

const CoinDetailPage = () => {
  const { coinID } = useParams();

  return (
    <div className="coin-detail-container">
      <h2>Detail</h2>
      <Link to={"/"}>Close</Link>
      <p>{coinID}</p>
    </div>
  );
};

export default CoinDetailPage;
