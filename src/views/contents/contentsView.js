export const renderContents = async (coins) => {

  console.log(`Contents View loaded.`);

  // Create the main container for API data
  const contents = document.createElement("main");
  contents.classList.add("live-data-container");

  // Create the coin data section
  const coinDataContainer = document.createElement("section");
  coinDataContainer.classList.add("coin-data-container");
  coinDataContainer.innerHTML = `<img src='${coins[0].image}' /> ${coins[0].name}: ${coins[0].current_price}`;

  // add the coin data container to the main section
  contents.appendChild(coinDataContainer);

  return contents;
};

