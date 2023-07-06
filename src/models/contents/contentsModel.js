import coingeckoAPI from "../api/coingeckoApiModel.js";
import { errorHandler } from "../../utils/errorHandler.js";

export const getContents = async () => {
  return coingeckoAPI
    .getAllCoins()
    .then((coins) => {
      console.log(`Contents Model Loaded.`);
      return coins;
    })
    .catch(errorHandler);
};
