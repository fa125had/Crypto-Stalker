import Header from "../../components/header/Header";
import CoinsList from "../../components/coinsList/CoinsList";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <main className="main-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Link to={"/favList"}>Favorites</Link>

      <CoinsList searchQuery={searchQuery} />
    </main>
  );
};

export default HomePage;
