import Header from "../../components/header/Header";
import CoinsList from "../../components/coinsList/CoinsList";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="main-container">
      <Header />
      <Link to={"/favList"}>Favorites</Link>

      <CoinsList />
    </main>
  );
};

export default HomePage;
