import Header from "../../components/header/Header";
import CoinsList from "../../components/coinsList/CoinsList";
import { useState } from "react";

const HomePage = () => {
  const [selectedVsCurrency, setSelectedVsCurrency] = useState("usd");

  return (
    <main className="main-container">
      <Header
        setSelectedVsCurrency={setSelectedVsCurrency}
        selectedVsCurrency={selectedVsCurrency}
      />

      <CoinsList selectedVsCurrency={selectedVsCurrency} />
    </main>
  );
};

export default HomePage;
