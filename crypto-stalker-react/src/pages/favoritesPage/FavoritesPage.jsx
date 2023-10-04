import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import FavoritesCoins from "../../components/favoritesCoins/FavoritesCoins";

const FavoritesPage = () => {
  return (
    <main className="main-container">
      <Header />
      <NavLink to={"/"}>HomePage</NavLink>
      <FavoritesCoins />
    </main>
  );
};

export default FavoritesPage;
