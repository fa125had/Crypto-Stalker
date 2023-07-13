import coingeckoAPI from "../models/api/coingeckoApiModel.js";

export const fetchFreshDataFromApi = async () => {
  await coingeckoAPI.getCoinsDataFromApi();

  setInterval(async () => {
    await coingeckoAPI.getCoinsDataFromApi();
  }, 60 * 1000);
};
