import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import FavoritesCoins from "../../components/favoritesCoins/FavoritesCoins";
import { useState } from "react";

const FavoritesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <main className="main-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NavLink to={"/"}>HomePage</NavLink>
      <FavoritesCoins searchQuery={searchQuery} />
    </main>
  );
};

export default FavoritesPage;
