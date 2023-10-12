import coingeckoAPI from "../api/coingeckoApiModel.js";

export const loadContents = (vsCurrency) => {
  const coins = coingeckoAPI.getCoinsMarketData(vsCurrency);

  return coins;
};

export const reloadContents = (vsCurrency) => {
  const coins = coingeckoAPI.getCoinsMarketData(vsCurrency);

  return coins;
};
