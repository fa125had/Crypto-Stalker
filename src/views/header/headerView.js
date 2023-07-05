export const renderHeader = () => {
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
  // Render Home Link in Navbar
  const homeLink = document.createElement("li");
  homeLink.classList.add("nav-link");
  homeLink.innerHTML = "Home";
  navLinks.appendChild(homeLink);
  // Render BTC Link in Navbar
  const btcLink = document.createElement("li");
  btcLink.classList.add("nav-link");
  btcLink.innerHTML = "BTC";
  navLinks.appendChild(btcLink);
  // Render ETH Link in Navbar
  const ethLink = document.createElement("li");
  ethLink.classList.add("nav-link");
  ethLink.innerHTML = "ETH";
  navLinks.appendChild(ethLink);
  // Render LTC Link in Navbar
  const ltcLink = document.createElement("li");
  ltcLink.classList.add("nav-link");
  ltcLink.innerHTML = "LTC";
  navLinks.appendChild(ltcLink);
  // Render XRP Link in Navbar
  const xrpLink = document.createElement("li");
  xrpLink.classList.add("nav-link");
  xrpLink.innerHTML = "XRP";
  navLinks.appendChild(xrpLink);
  // Render BCH Link in Navbar
  const bchLink = document.createElement("li");
  bchLink.classList.add("nav-link");
  bchLink.innerHTML = "BCH";
  navLinks.appendChild(bchLink);
  // Render BNB Link in Navbar
  const bnbLink = document.createElement("li");
  bnbLink.classList.add("nav-link");
  bnbLink.innerHTML = "BNB";
  navLinks.appendChild(bnbLink);
  // Add Navbar Links to Header
  navbar.appendChild(logoContainer);
  navbar.appendChild(navLinks);
  header.appendChild(navbar);

  return header;
};
