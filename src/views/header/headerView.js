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

    const coinName = document.createElement("p");
    coinName.classList.add("coin-name");
    coinName.textContent = coin.name;

    const coinImage = document.createElement("img");
    coinImage.setAttribute("src", coin.image);
    coinImage.classList.add("coin-image");

    coinLink.appendChild(coinName);
    coinLink.appendChild(coinImage);

    navLinks.appendChild(coinLink);
  });

  // Add Navbar Links to Header
  navbar.appendChild(logoContainer);
  navbar.appendChild(navLinks);
  header.appendChild(navbar);

  return header;
};
