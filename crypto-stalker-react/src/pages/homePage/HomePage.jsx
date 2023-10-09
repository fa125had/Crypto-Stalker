import CoinsList from "../../components/coinsList/CoinsList";
import NavBar from "../../components/navBar/NavBar";

const HomePage = ({ searchQuery }) => {
  return (
    <main className="main-container">
      <NavBar />
      <CoinsList searchQuery={searchQuery} />
    </main>
  );
};

export default HomePage;
