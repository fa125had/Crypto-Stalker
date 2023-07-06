import { errorHandler } from "../../utils/errorHandler.js";
import { initHeader } from "../../controllers/headerController.js";

// Keep track of the last fetch time
let lastFetch;

const coingeckoAPI = {
  baseUrl: "https://api.coingecko.com/api/v3",

  // Check API Server Status
  async ping() {
    // Retrieve the last fetch time from session storage
    lastFetch = Number(sessionStorage.getItem("lastFetch"));

    // Check if the first time fetching and if it's not, fetch allowed every 70 seconds.
    if (lastFetch && Date.now() - lastFetch < 120000) {
      const remainingTime = 120000 - (Date.now() - lastFetch);
      // errorHandler(
      //   new Error(
      //     `API data Automatically will load in ${Math.floor(
      //       remainingTime / 1000
      //     )} seconds. There is no need to refresh the page.`
      //   )
      // );

      // Toggle server status
      coingeckoAPI.serverResponse = false;

      // Return coins data stored in session storage
      const storedData = JSON.parse(sessionStorage.getItem("coinsData"));

      return storedData;
    } else {
      // Request URL for checking API server status
      const endpoint = `${this.baseUrl}/ping`;

      try {
        const response = await fetch(endpoint);
        if (response.status === 200) {
          const data = await response.json();
          coingeckoAPI.serverResponse = await data.gecko_says;

          // Update the last fetch time to session storage
          sessionStorage.setItem("lastFetch", Date.now());

          return coingeckoAPI.serverResponse;
        } else {
          errorHandler("Server is not responding. Please try again later.");
        }
      } catch (err) {
        errorHandler(err);
      }
    }
  },

  // Get All Coins
  async getAllCoins() {
    const vsCurrency = "usd";
    // Quantity of coins to retrieve
    const numberOfCoins = 15;

    try {
      const apiResponse = await coingeckoAPI.ping();

      // Fetch the Coin Data if Ping() has NOT returned an error
      if (coingeckoAPI.serverResponse) {
        // Toggle server status
        coingeckoAPI.serverResponse = "up";

        const baseUrl = "https://api.coingecko.com/api/v3";
        const endpoint = `${baseUrl}/coins/markets?vs_currency=${vsCurrency}&order=market_cap_desc&per_page=${numberOfCoins}&page=1&sparkline=false&locale=en`;
        const response = await fetch(endpoint);
        if(response.status !== 200) {
          errorHandler("Server is available but cannot fetch data. Please try again later.");
        }
        const coinsData = await response.json();

        // Save the Coin Data to session storage
        sessionStorage.setItem("coinsData", JSON.stringify(coinsData));
        console.log(
          "Saved to session storage: ",
          coinsData[0].id,
          coinsData[0].current_price
        );

        return coinsData;
      } else {
        // Return stored Coin Data in session storage if Ping() has returned an error
        return apiResponse;
      }
    } catch (err) {
      errorHandler(err);
    }
  },

  // Get Current Price of the Coin
  async getCurrentPrice(coinId) {
    const vsCurrency = "usd";

    try {
      const serverStatus = await coingeckoAPI.ping();
      coingeckoAPI.serverStatus = await serverStatus;
      const endpoint = `${this.baseUrl}/simple/price?ids=${coinId}&vs_currencies=${vsCurrency}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      const coinPrice = await data[coinId][vsCurrency];
      return coinPrice;
    } catch (err) {
      return errorHandler(err);
    }
  },

  // Get Coin Market Data
  async getCoinData(coinId) {
    try {
      // Fetch the Coin Data if Ping() has NOT returned an error
      const serverStatus = await coingeckoAPI.ping();
      coingeckoAPI.serverStatus = await serverStatus;
      const endpoint = `${this.baseUrl}/coins/${coinId}`;
      const response = await fetch(endpoint);
      const data = await response.json();

      // Extract the required properties from API response
      const {
        name,
        symbol,
        image,
        genesis_date,
        hashing_algorithm,
        categories,
        description,
        links,
        market_cap_rank,
        market_data,
      } = data;

      // Create an object with the required data
      const coinData = {
        coinName: name,
        coinSymbol: symbol,
        coinGenesisDate: genesis_date,
        coinAlgorithmName: hashing_algorithm,
        coinImageThumbSource: image.thumb,
        coinImageSmallSource: image.small,
        coinImageLargeSource: image.large,
        coinCategories: categories.join(", "),
        coinEnglishDescription: description.en,
        coinWebsitesLinks: links.blockchain_site.map((link) => link || null),
        coinHomepageLinks: links.homepage.map((link) => link || null),
        coinGithubLinks: links.repos_url.github.map((link) => link || null),
        coinRedditLinks: links.subreddit_url,
        marketCapRank: market_cap_rank,
        coinAthEur: market_data.ath.eur,
        coinAthUsd: market_data.ath.usd,
        coinAthChangePercentEur: market_data.ath_change_percentage.eur,
        coinAthChangePercentUsd: market_data.ath_change_percentage.usd,
        coinAthDateEur: market_data.ath_date.eur,
        coinAthDateUsd: market_data.ath_date.usd,
        coinAtlPriceEur: market_data.atl.eur,
        coinAtlPriceUsd: market_data.atl.usd,
        coinAtlDateEur: market_data.atl_date.eur,
        coinAtlDateUsd: market_data.atl_date.usd,
        coinCirculatingSupply: market_data.circulating_supply,
        coinTotalSupply: market_data.max_supply,
        coinCurrentPriceEur: market_data.current_price.eur,
        coinCurrentPriceUsd: market_data.current_price.usd,
        coinHigh24hEur: market_data.high_24h.eur,
        coinHigh24hUsd: market_data.high_24h.usd,
        coinLow24hEur: market_data.low_24h.eur,
        coinLow24hUsd: market_data.low_24h.usd,
        coinMarketcapChangePercent24h:
          market_data.market_cap_change_percentage_24h,
        coinPriceChangePercent24h: market_data.price_change_percentage_24h,
        coinPriceChangePercent7d: market_data.price_change_percentage_7d,
        coinPriceChangePercent30d: market_data.price_change_percentage_30d,
        coinPriceChangePercent60d: market_data.price_change_percentage_60d,
        coinPriceChangePercent200d: market_data.price_change_percentage_200d,
        coinPriceChangePercent1y: market_data.price_change_percentage_1y,
      };

      return coinData;
    } catch (err) {
      return errorHandler(err);
    }
  },
};

// Fetch Coin Data, update session storage
setInterval(() => {
  const coinData = coingeckoAPI.getAllCoins();
  initHeader(coinData);
}, 120000);

export default coingeckoAPI;
