export const renderWelcome = async () => {
  return new Promise((resolve, reject) => {
    const ui = document.getElementById("user-interface");

    const welcomeContainer = document.createElement("div");
    const welcomeImage = document.createElement("img");
    const welcomeText = document.createElement("p");

    welcomeContainer.classList.add("welcome-container");
    welcomeContainer.setAttribute("id", "welcome-container");

    welcomeImage.classList.add("welcome-image");
    welcomeImage.setAttribute("id", "welcome-image");
    welcomeImage.src = "./assets/images/welcome.jpg";

    welcomeText.classList.add("welcome-text");
    welcomeText.setAttribute("id", "welcome-text");
    welcomeText.textContent = "Crypto Stalker";

    welcomeContainer.appendChild(welcomeImage);
    welcomeContainer.appendChild(welcomeText);

    ui.appendChild(welcomeContainer);

    setTimeout(() => {
      welcomeContainer.style.display = "none";
      resolve(welcomeContainer);
    }, 4500);
  }).catch((error) => {
    console.log(new Error("Can not load welcome page!"));
  });
};
