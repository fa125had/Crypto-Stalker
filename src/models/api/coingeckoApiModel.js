import { errorHandler } from "../../utils/errorHandler.js";

const coingeckoAPI = {
  getCoinsDataFromStorage(vsCurrency) {
    const storedCoinsData = JSON.parse(
      sessionStorage.getItem(`coinsData-${vsCurrency}`)
    );

    return storedCoinsData;
  },

  async setCoinsDataToStorage(coinsData, vsCurrency) {
    sessionStorage.setItem(
      `coinsData-${vsCurrency}`,
      JSON.stringify(coinsData)
    );

    console.log(`Coins new data Saved to the Storage.`);
  },

  checkServerRateLimit(currentTime, vsCurrency) {
    const lastFetchTime = Number(
      sessionStorage.getItem(`lastFetchTime-${vsCurrency}`)
    );
    const serverRateLimit = 60 * 1000;
    const isServerReady = currentTime - lastFetchTime > serverRateLimit;

    console.log("isServerReady:", isServerReady);

    if (isServerReady) {
      sessionStorage.setItem(`lastFetchTime-${vsCurrency}`, currentTime);
      return "ok";
    } else {
      return "wait";
    }
  },

  async getCoinsDataFromApi(vsCurrency) {
    const currentTime = Date.now();

    if (this.checkServerRateLimit(currentTime, vsCurrency) === "ok") {
      console.log(vsCurrency);
      const numberOfCoins = 20;
      const baseUrl = "https://api.coingecko.com/api/v3";
      const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=1&sparkline=false&locale=en`;

      try {
        const response = await fetch(endpoint);
        const coinsData = await response.json();
        await this.setCoinsDataToStorage(coinsData, vsCurrency);

        console.log(
          "new Data from API received.",
          coinsData[0].name,
          coinsData[0].current_price
        );
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

  async getCoinsMarketData(vsCurrency) {
    await this.getCoinsDataFromApi(vsCurrency);
    const storedCoinsData = await this.getCoinsDataFromStorage(vsCurrency);

    return storedCoinsData;
  },
};

export default coingeckoAPI;
