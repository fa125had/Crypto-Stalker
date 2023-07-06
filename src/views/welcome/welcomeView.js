import { errorHandler } from "../../utils/errorHandler.js";

export const renderWelcome = async () => {
  return new Promise((resolve) => {
    const ui = document.getElementById("user-interface");
    // Render welcome page
    const welcomeContainer = document.createElement("div");
    const welcomeImage = document.createElement("img");
    const welcomeText = document.createElement("p");
    const welcomeSlogan = document.createElement("p");
    // Set up welcome Page
    welcomeContainer.classList.add("welcome-container");
    welcomeContainer.setAttribute("id", "welcome-container");
    // Set up welcome image
    welcomeImage.classList.add("welcome-image");
    welcomeImage.setAttribute("id", "welcome-image");
    welcomeImage.src = "./assets/images/welcome.jpg";
    // Set up welcome text
    welcomeText.classList.add("welcome-text");
    welcomeText.setAttribute("id", "welcome-text");
    welcomeText.textContent = "Crypto Stalker";
    welcomeSlogan.classList.add("welcome-slogan");
    welcomeSlogan.setAttribute("id", "welcome-slogan");
    welcomeSlogan.textContent = "Track Your Favorite Cryptocurrencies";
    // Add welcome page to UI
    welcomeContainer.appendChild(welcomeImage);
    welcomeContainer.appendChild(welcomeText);
    welcomeContainer.appendChild(welcomeSlogan);
    ui.appendChild(welcomeContainer);
    // Remove welcome page after 4.5 seconds
    setTimeout(() => {
      welcomeContainer.style.display = "none";
      resolve(welcomeContainer);
    }, 1000);
  }).catch((error) => {
    errorHandler(error);
  });
};
