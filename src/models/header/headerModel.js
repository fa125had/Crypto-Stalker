import coingeckoAPI from "../api/coingeckoApiModel.js";
import { errorHandler } from "../../utils/errorHandler.js";

export const getAllCoins = async () => {
  return coingeckoAPI
    .getAllCoins()
    .then((coins) => {
      console.log(coins);
      return coins;
    })
    .catch(errorHandler);
};
