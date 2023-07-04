export const marketDataUpdateView = (marketData) => {
  // const ui = document.getElementById("user-interface");
  // ui.innerHTML = ""; // Clear previous content

  const ul = document.createElement("ul");

  for (const key in marketData) {
    const value = marketData[key];
    const li = document.createElement("li");
    li.textContent = `${key}: ${value}`;
    ul.appendChild(li);
  }
  return ul;
};
