// First design FlexBox
// export const renderContent1 = async (coins, vsCurrency = "usd") => {
//   console.log(`Contents View loaded.`);

//   // Create the main container for API data
//   const contents = document.createElement("main");
//   contents.classList.add("main-container");

//   // Create the header
//   const header = document.createElement("header");
//   header.classList.add("header-container");
//   header.innerHTML = `
//   <div class='header'>
//   <p class='header-logo'>Crypto Stalker</p>
//   <h1 class='header-title'>Watch your favorite Coin</h1>
//   <p class='header-notification'>Server Refreshed!</p>
//   </div>
//   `;
//   contents.appendChild(header);

//   // Create the coin data section
//   const coinDataContainer = document.createElement("section");
//   coinDataContainer.classList.add("live-data-container");
//   coinDataContainer.innerHTML = "";

//   const formatNumberWithCommas = (number) => {
//     // Check if number is a float or integer
//     if (Math.floor(number) !== number) {
//       number = number.toFixed(3);
//     }
//     // Divide the number by 1,000
//     const formattedNumber = number
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     return formattedNumber;
//   };

//   coins.forEach((coin) => {
//     // Create Coin Data table
//     coinDataContainer.innerHTML += `

//     <div id='${coin.symbol}-data-container' class='coin-data-container' >

//     <div class='coin-market-cap-rank coin-data'>
//     <p class='coin-data-header'>Rank</p>
//     <p class='coin-data-value'>${coin.market_cap_rank}</p>
//     </div>

//     <div class='coin-image-container'>
//     <img class='coin-image' src='${coin.image}' />
//     </div>

//     <div class='coin-name coin-data'>
//     <p class='coin-data-header'>Name</p>
//     <p class='coin-data-value'>${
//       coin.name
//     }<span class='coin-symbol'>${coin.symbol.toUpperCase()}</span></p>
//     </div>

//     <div class='coin-price coin-data'>
//     <p class='coin-data-header'>Price</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.current_price
//     )}<span class='vs-currency'>${vsCurrency}</span></p>
//     </div>

//     <div class='coin-high-24h coin-data'>
//     <p class='coin-data-header'>Highest Price 24h</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.high_24h
//     )}<span class='vs-currency'>${vsCurrency}</span></p>
//     </div>

//     <div class='coin-low-24h coin-data'>
//     <p class='coin-data-header'>Lowest Price 24h</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.low_24h
//     )}<span class='vs-currency'>${vsCurrency}</span></p>
//     </div>

//     <div class='coin-market-cap coin-data'>
//     <p class='coin-data-header'>Market Cap</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.market_cap
//     )}<span class='vs-currency'>${vsCurrency}</span></p>
//     </div>

//     <div class='coin-ath-price coin-data'>
//     <p class='coin-data-header'>ATH Price</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.ath
//     )}<span class='vs-currency'>${vsCurrency}</span><span>${coin.ath_change_percentage.toFixed(
//       1
//     )}%</span></p>
//     </div>

//     <div class='coin-atl-price coin-data'>
//     <p class='coin-data-header'>ATL Price</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.atl
//     )}<span class='vs-currency'>${vsCurrency}</span><span>${coin.atl_change_percentage.toFixed(
//       1
//     )}%</span></p>
//     </div>

//       <!--
//     <div class='coin-atl-percentage coin-data'>
//     <p class='coin-data-header'>ATL Percentage</p>
//     <p class='coin-data-value'></p>
//     </div>

//     <div class='coin-volume coin-data'>
//     <p class='coin-data-header'>Total Volume</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.total_volume
//     )}<span class='vs-currency'>${vsCurrency}</span></p>
//     </div>

//     <div class='coin-total-supply coin-data'>
//     <p class='coin-data-header'>Total Supply</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.total_supply
//     )}<span class='vs-currency'>${coin.symbol}</span></p>
//     </div>

//     <div class='coin-circulating-supply coin-data'>
//     <p class='coin-data-header'>Circulating Supply</p>
//     <p class='coin-data-value'>${formatNumberWithCommas(
//       coin.circulating_supply
//     )}<span class='vs-currency'>${coin.symbol}</span></p>
//     </div>
//     -->
//     <div class='coin-last-updated coin-data'>
//     <p class='coin-data-header'>Last Updated</p>
//     <p class='coin-data-value'>${new Date(coin.last_updated).toLocaleString(
//       "UTC"
//     )}</p>
//     </div>

//     <!-- More-Info Button -->
//     <div class='coin-more-info-container'>
//     <button class='coin-more-info-button'>More Info</button>
//     </div>

//     </div>
//     `;
//   });

//   // Create another container

//   // const heroContainer = document.createElement("section");
//   // heroContainer.classList.add("hero-container");
//   // heroContainer.innerHTML = "";
//   // const hero = document.createElement("div");
//   // hero.classList.add("hero");
//   // hero.innerHTML = `
//   // <div class='hero-title'>
//   // <h1 id='hero-title'>Join the new era</h1>
//   // </div>

//   // <div class='subscription-form-container'>
//   // <form class='subscription-form'>
//   // <div class='subscription-form-title-container'>
//   // <p class='subscription-form-title'>Subscribe to start!</p>
//   // </div>
//   // <div class='subscription-form-input-container'>
//   // <input class='subscription-form-input' type='email' name='email' placeholder='Email' />
//   // </div>
//   // <div class='subscription-form-button-container'>
//   // <button class='subscription-form-button'>Subscribe</button>
//   // <button class='subscription-form-button'>Later</button>
//   // </div>
//   // </form>
//   // </div>
//   // `;
//   // heroContainer.appendChild(hero);

//   // add the coin data container to the main section
//   contents.appendChild(coinDataContainer);

//   // contents.appendChild(heroContainer);

//   return contents;
// };

// Second design Table
// export const renderContent2 = async (
//   coinsData,
//   vsCurrency = "usd",
//   coinDataKeys
// ) => {
//   // Main container
//   const contents = document.createElement("main");
//   contents.classList.add("main-container");

//   // Live data container
//   const liveDataContainer = document.createElement("section");
//   liveDataContainer.classList.add("live-data-container");

//   // Coins Data Table
//   const tableContainer = document.createElement("div");
//   tableContainer.classList.add("coin-data-table-container");
//   const table = document.createElement("table");
//   table.classList.add("coin-data-table");
//   const thead = document.createElement("thead");
//   thead.classList.add("table-headers");
//   const tbody = document.createElement("tbody");
//   tbody.classList.add("table-body");

//   // Create table headers
//   const tableHeaders = `
//     <tr>
//       <th scope='col'>Rank</th>
//       <th scope='col'>Name</th>
//       <th scope='col'>Price</th>
//       <th scope='col'>24h%</th>
//       <th scope='col'>Market Cap</th>
//       <th scope='col'>ATH</th>
//       <th scope='col'>ATL</th>
//       <th scope='col'>Total Supply</th>
//       <th scope='col'>Circulating Supply</th>
//       <th scope='col'>Last Updated</th>
//       <th scope='col'>More Info</th>
//     </tr>
//   `;
//   thead.innerHTML = tableHeaders;

//   // Create table rows for each coin
//   const tableRows = coinsData.map((coin) => {
//     return `
//       <tr>
//         <td>${coin.market_cap_rank}</td>
//         <td>
//           <span><img src='${coin.image}'></span>
//           ${coin.name} ${coin.symbol}
//         </td>
//         <td>${coin.current_price} ${vsCurrency}</td>
//         <td>${coin.price_change_percentage_24h}</td>
//         <td>${coin.market_cap}</td>
//         <td>${coin.ath}</td>
//         <td>${coin.atl}</td>
//         <td>${coin.total_supply}</td>
//         <td>${coin.circulating_supply}</td>
//         <td>${coin.last_updated}</td>
//         <td><button class='coin-more-info-button'>More Info</button></td>
//       </tr>
//     `;
//   });

//   tbody.innerHTML = tableRows.join("");

//   // Append the table components to the container
//   table.appendChild(thead);
//   table.appendChild(tbody);
//   tableContainer.appendChild(table);

//   // Append the table container to the live data container
//   liveDataContainer.appendChild(tableContainer);

//   // Append the live data container to the main container
//   contents.appendChild(liveDataContainer);

//   return contents;
// };

//Third approach Mix
export const renderContents = async (
  coinsData,
  vsCurrency = "usd",
  coinDataKeys
) => {
  // Validate if coinsData is defined
  if (!coinsData) {
    throw new Error("Coins data is not provided!");
  }

  // Main container
  const contents = document.createElement("main");
  contents.classList.add("main-container");

  // Header
  const header = document.createElement("header");
  header.classList.add("header-container");
  header.innerHTML = `
  <nav class='header'>
  <p class='header-logo'>Crypto Stalker</p>
  <ul class='nav-list'>
  <li class='nav-item'><h1 class='header-title'>Watch your favorite Coin</h1></li>
  <li class='nav-item'><p class='header-notification'>Refreshed!</p></li>
  </ul>
  </nav>
  `;
  contents.appendChild(header);

  // Coin data section
  const coinDataContainer = document.createElement("section");
  coinDataContainer.classList.add("live-data-container");

  const formatNumberWithCommas = (number) => {
    // Check if number is a float or integer
    if (Math.floor(number) !== number) {
      number = number.toFixed(3);
    }
    // Divide the number by 1,000
    const formattedNumber = number
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedNumber;
  };

  let coinDataHTML = "";
  coinsData.forEach((coin) => {
    // Create Coin Data table
    coinDataHTML += `
    
    <div id='${coin.symbol}-data-container' class='coin-data-container' >

      <div class='coin-image-container'>
        <img class='coin-image' src='${coin.image}' alt=${coin.name}/>
      </div>

      <div class='coin-name-container'>
        <p class='coin-name'>${coin.symbol} ${vsCurrency}</p>
        <p class='coin-name-sub'>${coin.name} / ${vsCurrency}</p>
      </div>

      <div class='coin-price-container'>
        <p class='coin-price'>${formatNumberWithCommas(coin.current_price)}</p>
    
        <div class='coin-price-change'>
          <p class='coin-price-change-price'>${formatNumberWithCommas(coin.price_change_24h)} $</p>
          <p class='coin-price-change-percentage'>${formatNumberWithCommas(coin.price_change_percentage_24h)} %</p>
        </div>
      </div>

    </div>
    `;
  });

  coinDataContainer.innerHTML = coinDataHTML;
  contents.appendChild(coinDataContainer);

  return contents;
};

