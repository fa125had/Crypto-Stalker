import { useState, useEffect } from "react";

export const useCoinGeckoAPI = (vsCurrency) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {

        const coinsData = await coingeckoAPI.getCoinsMarketData(vsCurrency);
        setData(coinsData);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [vsCurrency]);

  return { data, loading, error };
};