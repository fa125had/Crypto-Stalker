export const renderHeader = (coins) => {
  // Create Header
  const header = document.createElement("header");
  header.classList.add("header-container");
  header.setAttribute("id", "header-container");

  header.innerHTML = `
  <nav class='header'>
    <ul class='nav-list'>
      <li class='nav-item'>
        <p class='logo'>Crypto Stalker</p>
      </li>
      <li class='nav-item'>
        <h1 class='title'>Watchlist</h1>
        <p class='refresh-notification' id='header-notification'>Refreshed!</p>
      </li>
      <li class='nav-item'>
        <span class='currency-selector-container'>
          <select id='currency-selector' name='vsCurrency'>
            <option value='usd' selected>USD</option>
            <option value='btc'>BTC</option>
            <option value='eur'>Eur</option>
          </select>
        </span>
      </li>
    </ul>
  </nav>
  `;

  return header;
};

// Refresh Header Notification
export const refreshNotification = () => {
  const headerNotification = document.getElementById("header-notification");
  headerNotification.style.visibility = "visible";
  headerNotification.classList.add("animated-fade-out");

  // Hide the notification after 1.5 seconds.
  setTimeout(() => {
    headerNotification.style.visibility = "hidden";
  }, 1500);
};
