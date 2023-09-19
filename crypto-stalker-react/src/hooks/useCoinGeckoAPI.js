import { useState, useEffect } from "react";

export const useCoinGeckoAPI = (vsCurrency) => {
  const [coinsData, setCoinsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Request config
  const numberOfCoins = 100;
  const pageNumber = 1;
  const baseUrl = "https://api.coingecko.com/api/v3";

  useEffect(() => {
    const fetchData = async () => {
      // CoinGecko API, Coins Market data resource
      const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=${pageNumber}&sparkline=false&locale=en`;

      try {
        setLoading(true);
        // Check if already data exist in sessionStorage or not
        const storedData = sessionStorage.getItem(`coinsData-${vsCurrency}`);

        if (storedData) {
          setCoinsData(JSON.parse(storedData));
          setLoading(false);
          console.log(`Data loaded from session storage`);
        } else {
          // Fetch Coins Data from API
          const response = await fetch(endpoint);
          const coinsData = await response.json();
          // Save fresh data to session storage.
          sessionStorage.setItem(
            `coinsData-${vsCurrency}`,
            JSON.stringify(coinsData)
          );
          // update Data state
          setCoinsData(coinsData);
          setLoading(false);
          console.log(`Data loaded from API`);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
    // Reload data from server
    const intervalId = setInterval(async () => {
      const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=${pageNumber}&sparkline=false&locale=en`;
      // Fetch Coins Data from API
      const response = await fetch(endpoint);
      const coinsData = await response.json();
      // Save fresh data to session storage.
      sessionStorage.setItem(
        `coinsData-${vsCurrency}`,
        JSON.stringify(coinsData)
      );
      // update Data state Automatically
      setCoinsData(coinsData);
      setLoading(false);
      console.log(`Data loaded from API`);
    }, 100000);

    return () => clearInterval(intervalId);
  }, [vsCurrency]);

  return { coinsData, loading, error };
};
