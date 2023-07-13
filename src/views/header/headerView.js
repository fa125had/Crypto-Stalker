export const renderHeader = (coins) => {
  // Create Header
  const header = document.createElement("header");
  header.classList.add("header-container");
  header.setAttribute("id", "header-container");
  
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
            <option value='eur'>Eur</option>
          </select>
        </span>
        <span class='header-notification-container'>
          <p class='refresh-notification' id='header-notification'>Refreshed!</p>
        </span>
      </li>
    </ul>
  </nav>
  `;

  return header;
};
