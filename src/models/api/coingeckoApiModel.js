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

  checkServerRateLimit(currentTime, vsCurrencies) {
    const lastFetchTime = Number(sessionStorage.getItem(`lastFetchTime-${vsCurrencies}`));
    const serverRateLimit = 60 * 1000;
    const remainingTime = currentTime - lastFetchTime;

    if (remainingTime > serverRateLimit) {
      sessionStorage.setItem(`lastFetchTime-${vsCurrencies}`, currentTime);
      return 'ok';
    } else {
      console.log(
        `Server rate limit exceeded. Data loaded from storage, Please try again ${remainingTime} second later.`
      );
      return 'wait';
    }
  },

  async getCoinsDataFromApi(vsCurrencies = ["usd", "eur", "btc"]) {
    const currentTime = Date.now();

    if (this.checkServerRateLimit(currentTime, vsCurrencies) === "ok") {
      console.log(vsCurrencies);
      const vsCurrency = vsCurrencies;
      const numberOfCoins = 20;
      const baseUrl = "https://api.coingecko.com/api/v3";
      const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=1&sparkline=false&locale=en`;

      try {
        const response = await fetch(endpoint);
        const coinsData = await response.json();
        await this.setCoinsDataToStorage(coinsData, vsCurrency);
        console.log("new Data from API received.");
      } catch (error) {
        errorHandler(
          `Unable to fetch data from CoinGecko API. Please try again later. ${error}`
        );
      }
    } else if (this.checkServerRateLimit(currentTime, vsCurrencies) === "wait") {
      return this.getCoinsDataFromStorage(vsCurrencies);
    }
  },

  async getCoinsMarketData(vsCurrency) {
    await this.getCoinsDataFromApi(vsCurrency);
    const storedCoinsData = await this.getCoinsDataFromStorage(vsCurrency);

    return storedCoinsData;
  },
};

export default coingeckoAPI;
