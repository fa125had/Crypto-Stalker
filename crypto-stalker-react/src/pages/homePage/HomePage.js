import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [coinsData, setCoinsData] = useState([]);
  const [vsCurrency, setVsCurrency] = useState("usd");

  return (
    <main className="main-container">
      <section className="coin-data-container" id="coins-table">

      </section>
    </main>
  );
};

export default HomePage;
