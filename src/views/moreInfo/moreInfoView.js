export const renderMoreInfoPage = () => {
  // Grab coin data from the contents table
  const coinRow = document.getElementsByClassName(`coin-data-container`);

  // Add event listener to each coin row
  for (let i = 0; i < coinRow.length; i++) {
    coinRow[i].addEventListener("click", (e) => {
      infoContainer.classList.add("visible");
      const coinSymbol = coinRow[i].dataset.symbol;

      console.log(coinSymbol);
    });
  }

  // create a container for the more info
  const infoContainer = document.createElement("div");
  infoContainer.classList.add("more-info-container");

  // close button
  const closeButton = document.createElement("button");
  closeButton.classList.add("close-button");
  closeButton.innerHTML = "Close";

  closeButton.addEventListener("click", (e) => {
    infoContainer.classList.remove("visible");
  });

  infoContainer.appendChild(closeButton);

  return infoContainer;
};
