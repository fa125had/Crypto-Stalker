import coingeckoAPI from "../models/coingeckoApiModel.js";
import { marketDataUpdateView } from "../views/contents/apiContentsView.js";
import { errorHandler } from "../utils/errorHandler.js";

export const fetchDataAndUpdateView = (coinId, resource) => {
  if (resource === "simplePrice") {
    coingeckoAPI
      .getCurrentPrice(coinId)
      .then((coinPrice) => {
        updateView(coinPrice, coingeckoAPI.serverStatus, coinId);
      })
      .catch((err) => {
        errorHandler(err);
      });
  }
  if (resource === "marketData") {
    coingeckoAPI
      .getCoinData(coinId)
      .then((coinData) => {
        return marketDataUpdateView(coinData);
      })
      .catch((err) => {
        errorHandler(err);
      });
  }
};
