export const renderContents = async (coins) => {
  console.log(`Contents View loaded.`);

  // Create the main container for API data
  const contents = document.createElement("main");
  contents.classList.add("main-container");

  // Create the coin data section
  const coinDataContainer = document.createElement("section");
  coinDataContainer.classList.add("live-data-container");
  coinDataContainer.innerHTML = "";

  function formatNumberWithCommas(number) {
    if (Math.floor(number) !== number) {
      number = number.toFixed(3);
    }
    const formattedNumber = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
  }

  coins.forEach((coin) => {
    coinDataContainer.innerHTML += `
    
    <div id='${coin.symbol}-data-container' class='coin-data-container' >

    <div class='coin-image-container'>
    <img class='coin-image' src='${coin.image}' /> 
    </div>
    
    <div class='coin-name coin-data'>
    <p class='coin-data-header'>Name</p>
    <p class='coin-data-value'>${coin.name}</p>
    </div>
    
    <div class='coin-symbol coin-data'>
    <p class='coin-data-header'>Symbol</p>
    <p class='coin-data-value'>${coin.symbol.toUpperCase()}</p>
    </div>
    
    <div class='coin-price coin-data'>
    <p class='coin-data-header'>Price</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.current_price)}</p>
    </div>

    <div class='coin-market-cap-rank coin-data'>
    <p class='coin-data-header'>Market Cap Rank</p>
    <p class='coin-data-value'>${coin.market_cap_rank}</p>
    </div>
    <!--
    <div class='coin-market-cap coin-data'>
    <p class='coin-data-header'>Market Cap</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.market_cap)}</p>
    </div>
    
    <div class='coin-high-24h coin-data'>
    <p class='coin-data-header'>Highest Price 24h</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.high_24h)}</p>
    </div>
    
    <div class='coin-low-24h coin-data'>
    <p class='coin-data-header'>Lowest Price 24h</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.low_24h)}</p>
    </div>
    
    <div class='coin-ath-price coin-data'>
    <p class='coin-data-header'>ATH Price</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.ath)}</p>
    </div>
    
    <div class='coin-ath-percentage coin-data'>
    <p class='coin-data-header'>ATH Percentage</p>
    <p class='coin-data-value'>${coin.ath_change_percentage.toFixed(1)}%</p>
    </div>
    
    <div class='coin-atl-price coin-data'>
    <p class='coin-data-header'>ATL Price</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.atl)}</p>
    </div>
    
    <div class='coin-atl-percentage coin-data'>
    <p class='coin-data-header'>ATL Percentage</p>
    <p class='coin-data-value'>${coin.atl_change_percentage.toFixed(1)}%</p>
    </div>
    
    <div class='coin-volume coin-data'>
    <p class='coin-data-header'>Total Volume</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.total_volume)}</p>
    </div>
    
    <div class='coin-total-supply coin-data'>
    <p class='coin-data-header'>Total Supply</p>
    <p class='coin-data-value'>${formatNumberWithCommas(coin.total_supply)}</p>
    </div>
    
    <div class='coin-circulating-supply coin-data'>
    <p class='coin-data-header'>Circulating Supply</p>
    <p class='coin-data-value'>${formatNumberWithCommas(
      coin.circulating_supply
    )}</p>
    </div>
    -->
    <div class='coin-last-updated coin-data'>
    <p class='coin-data-header'>Last Updated</p>
    <p class='coin-data-value'>${new Date(
      coin.last_updated
    ).toLocaleString()}</p>
    </div>

    </div>
    `;
  });

  // add the coin data container to the main section
  contents.appendChild(coinDataContainer);

  return contents;
};
