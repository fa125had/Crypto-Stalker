import { useState } from "react";
import FavoritesCoins from "../../components/favoritesCoins/FavoritesCoins";
import NavBar from "../../components/navBar/NavBar";

const FavoritesPage = () => {
  const [searchQuery] = useState("");
  return (
    <main className="main-container">
      <NavBar />
      <FavoritesCoins searchQuery={searchQuery} />
    </main>
  );
};

export default FavoritesPage;
