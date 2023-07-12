// Divide the number by 1,000
const formatNumberWithCommas = (number) => {
  // Check if number is a float or integer
  return number.toLocaleString('en-US', {minimumFractionDigits: 0, maximumFractionDigits: 8});
  // return formattedNumber;
};

// Refresh Header Notification
const refreshNotification = () => {
  const headerNotification = document.getElementById("header-notification");
  headerNotification.style.visibility = "visible";
  headerNotification.classList.add("animated-fade-out");

  setTimeout(() => {
    headerNotification.style.visibility = "hidden";
  }, 1500);
};

export const renderContents = (coinsData, vsCurrency) => {
  // Validate if coinsData is defined
  if (!coinsData) {
    new Error("Coins data is not provided!");
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

  // Create Header
  const header = document.createElement("header");
  header.classList.add("header-container");
  header.innerHTML = `
  <nav class='header'>
    <p class='header-logo'>Crypto Stalker</p>
    <ul class='nav-list'>
      <li class='nav-item'>
        <h1 class='header-title'>Watch your favorite Coin</h1>
      </li>
      <li class='nav-item header-menu-container'>
        <span class='currency-selector-container'>
          <select id='currency-selector' name='vsCurrency'>
            <option value='usd' selected>USD</option>
            <option value='btc'>BTC</option>
            <option value='eur'>Euro</option>
          </select>
        </span>
        <span class='header-notification-container'>
          <p class='refresh-notification' id='header-notification'>Refreshed!</p>
        </span>
      </li>
    </ul>
  </nav>
  `;
  // Add Header to main
  contents.appendChild(header);

  // Coin data section
  const coinDataContainer = document.createElement("section");
  coinDataContainer.classList.add("live-data-container");

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
    
    <div id='${coin.symbol}-data-container' class='coin-data-container' >

      <div class='coin-image-container'>
        <img class='coin-image' src='${coinLogo}' alt=${coinName}/>
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
          )}' id=${coinSymbol}-price-change24-price>${formatNumberWithCommas(
      coin24hChange
    )} ${vsSymbol}</p>
          <p class='coin-price-change-percentage ${profitLossStyle(
            coin24hChange
          )}' id=${coinSymbol}-price-change24-percentage>${formatNumberWithCommas(
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
    )}`;

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
