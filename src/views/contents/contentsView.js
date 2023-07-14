import { refreshNotification } from "../header/headerView.js";

// Divide the number by 1,000 and round to 2 to 8 decimals
const formatNumberWithCommas = (number) => {
  // round to 2 decimals for the coins with +1 price
  if (Math.abs(number) > 1) {
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  } else {
    // round to 8 decimals for the coins lower tha 1 price
    return number.toLocaleString("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 8,
    });
  }
};

export const renderContents = (coinsData, vsCurrency) => {
  // Validate if coinsData is defined
  if (!coinsData || !vsCurrency) {
    new Error("Coins data or Pair currency is not provided!");
  }

  // Set vsSymbol
  const vsSymbol =
    vsCurrency[0] === "usd"
      ? "$"
      : vsCurrency[0] === "btc"
      ? "฿"
      : vsCurrency[0] === "eur"
      ? "€"
      : vsCurrency[0];

  // Main container
  const contents = document.createElement("main");
  contents.classList.add("main-container");

  // Coin data section
  const coinDataContainer = document.createElement("section");
  coinDataContainer.classList.add("live-data-container");
  coinDataContainer.setAttribute("id", "coins-table");

  const profitLossStyle = (change) => {
    if (change > 0) {
      return "inProfit";
    } else if (change < 0) {
      return "inLoss";
    }
  };

  let coinDataHTML = "";
  coinsData.forEach((coin) => {
    // Extract needed keys
    const coinLogo = coin.image;
    const coinName = coin.name;
    const coinSymbol = coin.symbol;
    const coinPrice = coin.current_price;
    const coin24hChange = coin.price_change_24h;
    const coin24PercentChange = coin.price_change_percentage_24h;

    // Create Coin Data table
    coinDataHTML += `
    
    <div id='${
      coin.symbol
    }-data-container' class='coin-data-container' data-category='${coin.name.toLowerCase()}' data-symbol='${coin.symbol}'>

      <div class='coin-image-container'>
        <img class='coin-image' src='${coinLogo}' alt=${coinName} title=${coinName}>
        <p class='coin-rank' title='Market cap Rank '>${
          coin.market_cap_rank
        }</p>
      </div>

      <div class='coin-name-container'>
        <p class='coin-name'>${coinSymbol}<span class='vs-currency'>${vsCurrency}</span></p>
        <p class='coin-name-sub'>${coinName} /<span class='vs-currency'>${vsCurrency}</span></p>
      </div>

      <div class='coin-price-container'>
        <p class='coin-price' id=${coinSymbol}-current-price>${formatNumberWithCommas(
      coinPrice
    )}</p>
    
        <div class='coin-price-change'>
          <p class='coin-price-change-price ${profitLossStyle(
            coin24hChange
          )}' id=${coinSymbol}-price-change24-price title='Past 24h'>${formatNumberWithCommas(
      coin24hChange
    )} ${vsSymbol}</p>
          <p class='coin-price-change-percentage ${profitLossStyle(
            coin24hChange
          )} %' id=${coinSymbol}-price-change24-percentage title='Past 24h'>${formatNumberWithCommas(
      coin24PercentChange
    )} %</p>
        </div>
      </div>

    </div>
    `;
  });

  coinDataContainer.innerHTML = coinDataHTML;
  contents.appendChild(coinDataContainer);

  return contents;
};

export const reRenderContents = (coinsData, vsCurrency) => {
  coinsData.forEach((coin) => {
    // Extract needed keys
    const coinSymbol = coin.symbol;
    const coinPrice = coin.current_price;
    const coin24hChange = coin.price_change_24h;
    const coin24PercentChange = coin.price_change_percentage_24h;

    // Set vsSymbol
    const vsSymbol =
      vsCurrency === "usd"
        ? "$"
        : vsCurrency === "btc"
        ? "฿"
        : vsCurrency === "eur"
        ? "€"
        : vsCurrency;

    // Select outdated elements
    const currentPriceElement = document.getElementById(
      `${coinSymbol}-current-price`
    );

    const price24ChangePriceElement = document.getElementById(
      `${coinSymbol}-price-change24-price`
    );

    const price24ChangePercentElement = document.getElementById(
      `${coinSymbol}-price-change24-percentage`
    );

    // Update the current price
    currentPriceElement.textContent = formatNumberWithCommas(coinPrice);

    // Update the price change
    price24ChangePriceElement.textContent = `${formatNumberWithCommas(
      coin24hChange
    )} ${vsSymbol}`;

    price24ChangePercentElement.textContent = `${formatNumberWithCommas(
      coin24PercentChange
    )} %`;

    // Update the vs currency
    const vsCurrencyElements = document.querySelectorAll(".vs-currency");
    for (const vsCurrencyElement of vsCurrencyElements) {
      vsCurrencyElement.textContent = vsCurrency;
    }

    // Refresh Updated Elements styles
    currentPriceElement.classList.remove("inProfit");
    currentPriceElement.classList.remove("inLoss");
    price24ChangePriceElement.classList.remove("inProfit");
    price24ChangePriceElement.classList.remove("inLoss");
    price24ChangePercentElement.classList.remove("inProfit");
    price24ChangePercentElement.classList.remove("inLoss");

    if (coin24hChange > 0) {
      price24ChangePriceElement.classList.add("inProfit");
      price24ChangePercentElement.classList.add("inProfit");
    } else if (coin24hChange < 0) {
      price24ChangePriceElement.classList.add("inLoss");
      price24ChangePercentElement.classList.add("inLoss");
    }
  });

  console.log("Contents refreshed!");

  refreshNotification();
};
