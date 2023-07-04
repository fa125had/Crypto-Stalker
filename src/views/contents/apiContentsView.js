export const marketDataUpdateView = (marketData) => {
  const ui = document.getElementById("user-interface");
  // ui.innerHTML = ""; // Clear previous content

  for (const key in marketData) {
    const value = marketData[key];

    const p = document.createElement("p");
    p.textContent = `${key}: ${value}`;

    return p;
  }
};
