import { getContents } from "../models/contents/contentsModel.js";
import { renderContents, reloadContents } from "../views/contents/contentsView.js";
import { errorHandler } from "../utils/errorHandler.js";

export const initContents = async () => {
  try {
    // Fetch coins and render the header
    const coins = await getContents();

    console.log(`Contents Controller Initialized.`);

    //* Grab all the keys from the coins data
    const coinDataKeys = Object.keys(coins[0]);

    return renderContents(coins, 'usd' ,coinDataKeys);
  } catch (error) {
    errorHandler(error);
  }
};

export const initContentsReload = async () => {
  const coins = await getContents();
  return reloadContents(coins);
};
