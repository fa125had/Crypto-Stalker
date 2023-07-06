export const renderHeader = (coins) => {
  // Render Header
  const header = document.createElement("header");
  header.classList.add("header-container");

  // Render Navbar
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  // Render Logo
  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");
  const logo = document.createElement("img");
  logo.setAttribute("src", "./assets/images/logo.jpg");
  logo.classList.add("logo");
  logoContainer.appendChild(logo);

  // Render Navbar Links
  const navLinks = document.createElement("ul");
  navLinks.classList.add("nav-links");
  navLinks.setAttribute("id", "nav-links");
  navLinks.setAttribute("role", "navigation");

  // Render coins links
  coins.forEach((coin) => {
    const coinLink = document.createElement("li");
    coinLink.classList.add("nav-link");

    // Add coin name
    const coinName = document.createElement("p");
    coinName.classList.add("coin-name");
    coinName.textContent = coin.name;

    // Add coin image
    const coinImage = document.createElement("img");
    coinImage.setAttribute("src", coin.image);
    coinImage.classList.add("coin-image");

    // Add coin 24 percent changes
    const coinChange = document.createElement("p");
    coinChange.classList.add("coin-change");
    coinChange.textContent = `${coin.price_change_percentage_24h}% 24h`;

    // Style coin change
    coin.price_change_percentage_24h >= 0
      ? (coinChange.style.color = "green")
      : (coinChange.style.color = "red");

    coinLink.appendChild(coinName);
    coinLink.appendChild(coinImage);
    coinLink.appendChild(coinChange);

    navLinks.appendChild(coinLink);
  });

  // Add Navbar Links to Header
  navbar.appendChild(logoContainer);
  navbar.appendChild(navLinks);
  header.appendChild(navbar);

  return header;
};
