import { getAllCoins } from "../models/header/headerModel.js";
import { renderHeader, reloadHeader } from "../views/header/headerView.js";
import { errorHandler } from "../utils/errorHandler.js";

export const initHeader = async () => {
  try {
    // Fetch coins and render the header
        const coins = await getAllCoins();
        return renderHeader(coins);     

  } catch (error) {
    errorHandler(error);
  }
};

export const initHeaderReload = async () => {
    const coins = await getAllCoins();
    return reloadHeader(coins);
};
