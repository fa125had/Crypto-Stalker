const loadMoreData = (coinSymbol, vsCurrency, infoContainer) => {
  // Load all coins data from sessionStorage based on the selected vsCurrency
  const coinsData = JSON.parse(
    sessionStorage.getItem(`coinsData-${vsCurrency}`)
  );
  // Filter requested coin
  const filteredCoinData = coinsData.filter(
    (coin) => coin.symbol === coinSymbol
  );
  const coin = filteredCoinData[0];

  // Render coin data
  const coinDataContainer = document.createElement("div");
  coinDataContainer.classList.add("coin-more-data");
  coinDataContainer.innerHTML = "";

  coinDataContainer.innerHTML = `
  <section class="primary-data-container">
    <header class="primary-data-header">
      <img class='coin-image' src="${coin.image}" alt="${coin.name}" />
  
      <p class='coin-name'>${
        coin.name
      } - ${coin.symbol.toUpperCase()}  ${vsCurrency.toUpperCase()}</p>
      <p class='coin-price'>${coin.current_price}</p>
    </header>

    <main class="primary-data">
      <section class="primary-data-ath coin-info-block">
        <p class='ath-price' title='All Time High'>ATH ${coin.ath}
          <span class='ath-change ${
            coin.ath_change_percentage > 0 ? "profit" : "loss"
          }'>
            ${coin.ath_change_percentage}%
          </span>
  
        </p>
      </section>

      <section class="primary-data-atl coin-info-block">
        <p class='atl-price' title='All Time Low'>ATL ${coin.atl}
          <span class='atl-change ${
            coin.atl_change_percentage > 0 ? "profit" : "loss"
          }'>
            ${coin.atl_change_percentage}%
          </span>
  
        </p>
      </section>

      <section class="primary-data-supply coin-info-block">
        <p class='total-supply'>
          Total Supply: ${coin.total_supply.toLocaleString(
            "en-US"
          )} ${coinSymbol.toUpperCase()}
        </p>
        <p class='circulating-supply'>
          Circulating Supply: ${coin.circulating_supply.toLocaleString(
            "en-US"
          )} ${coinSymbol.toUpperCase()}
        </p>
      </section>

      <section class="primary-data-changes coin-info-block">
        <p>
          Highest Price Last 24h: ${coin.high_24h}
        </p>
        <p>
          Lowest Price Last 24h: ${coin.low_24h}
        </p>
      </section>

      <section class="primary-data-market-cap coin-info-block">
        <p>
          Market Cap Rank: ${coin.market_cap_rank}
        </p>
        <p>
          Market Cap: ${coin.market_cap.toLocaleString("en-US")}
        </p>
      </section>
    </main>
    </section>
    `;

  infoContainer.appendChild(coinDataContainer);

  // TradingView Widget
  const tradingViewWidget = document.createElement("div");
  tradingViewWidget.id = "tradingview-widget";
  const tradingViewScript = document.createElement("script");
  tradingViewScript.type = "text/javascript";
  tradingViewScript.src =
    "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
  tradingViewScript.async = true;
  tradingViewScript.innerHTML =
    `
  {
    "interval": "4h",
    "isTransparent": true,
    "symbol": "BINANCE:${coinSymbol.toUpperCase()}${vsCurrency.toUpperCase()}",
    "showIntervalTabs": true,
    "locale": "en",
    "colorTheme": "dark"
  }
  `;

  // Append TradingView widget to the coin data container
  tradingViewWidget.appendChild(tradingViewScript);
  coinDataContainer.appendChild(tradingViewWidget);

  console.log(coin);
};

export const renderMoreInfoPage = () => {
  // create a container for the more-info
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("more-info-container");

  const refreshInfoContainer = () => {
    infoContainer.innerHTML = "";

    // Close button
    const closeButton = document.createElement("button");
    closeButton.type = "button";
    closeButton.classList.add("close-button");
    closeButton.innerText = "Close";

    // Close button click event
    closeButton.addEventListener("click", () => {
      infoContainer.classList.remove("visible");
    });

    infoContainer.appendChild(closeButton);
  };

  // Fetch Pair coin selector value
  const vsCurrency = document.getElementById("currency-selector").value;

  // Select coin's rows in the table
  const dataTable = document.getElementsByClassName(`coin-data-container`);

  // Add event listener to each coin row
  for (let i = 0; i < dataTable.length; i++) {
    dataTable[i].addEventListener("click", () => {
      // Refresh the More-Info page
      refreshInfoContainer();
      // Make the More-Info page visible
      infoContainer.classList.add("visible");
      // Get the coin symbol from the data-symbol attribute
      const coinSymbol = dataTable[i].dataset.symbol;
      // Fetch Pair coin selector value
      const vsCurrency = document.getElementById("currency-selector").value;
      // Pass coin symbol and infoContainer to load other data based on them
      loadMoreData(coinSymbol, vsCurrency, infoContainer);
    });
  }

  return infoContainer;
};
