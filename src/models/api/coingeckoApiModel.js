import { errorHandler } from "../../utils/errorHandler.js";

const coingeckoAPI = {
  // Get all the coins data from the session storage.
  getCoinsDataFromStorage(vsCurrency) {
    const storedCoinsData = JSON.parse(
      sessionStorage.getItem(`coinsData-${vsCurrency}`)
    );
    // T-shoot logging.
    console.info(`Coins loaded from the Storage.`);

    return storedCoinsData;
  },

  // Save the coins data to the session storage.
  async setCoinsDataToStorage(coinsData, vsCurrency) {
    sessionStorage.setItem(
      `coinsData-${vsCurrency}`,
      JSON.stringify(coinsData)
    );

    // T-shoot logging.
    console.info(`Coins new data Saved to the Storage.`);
  },

  // Check API Server rate limit.
  checkServerRateLimit(currentTime, vsCurrency) {
    const lastFetchTime = Number(
      sessionStorage.getItem(`lastFetchTime-${vsCurrency}`)
    );
    // Server rate limit in milliseconds.
    const serverRateLimit = 60 * 1000;
    const isServerReady = currentTime - lastFetchTime > serverRateLimit;

    // T-shoot logging.
    console.info("Is Server Ready? ", isServerReady);

    if (isServerReady) {
      // Save the last fetch time for each pair coin.
      sessionStorage.setItem(`lastFetchTime-${vsCurrency}`, currentTime);
      return "ok";
    } else {
      return "wait";
    }
  },

  // Get all the coins data from CoinGecko API.
  async getCoinsDataFromApi(vsCurrency) {
    const currentTime = Date.now();

    if (this.checkServerRateLimit(currentTime, vsCurrency) === "ok") {
      // T-shoot logging.
      console.info("Data will loaded for " + vsCurrency + " pair.");

      const numberOfCoins = 100;
      const pageNumber = 1;
      const baseUrl = "https://api.coingecko.com/api/v3";

      // CoinGecko API, Coins Market data resource
      const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=${pageNumber}&sparkline=false&locale=en`;

      try {
        const response = await fetch(endpoint);
        const coinsData = await response.json();
        // Save fresh data to session storage.
        await this.setCoinsDataToStorage(coinsData, vsCurrency);

        // T-shoot logging.
        console.table({
          coin: coinsData[0].name,
          price: coinsData[0].current_price,
        });
      } catch (error) {
        errorHandler(
          `Unable to fetch data from CoinGecko API. Please try again later. ${error}`
        );
      }
    } else if (this.checkServerRateLimit(currentTime, vsCurrency) === "wait") {
      errorHandler(`No manual refresh needed\ndata auto-updates every minute.`);
      return;
    }
  },
  // Initializer
  async getCoinsMarketData(vsCurrency) {
    await this.getCoinsDataFromApi(vsCurrency);
    const storedCoinsData = await this.getCoinsDataFromStorage(vsCurrency);

    return storedCoinsData;
  },
};

export default coingeckoAPI;
