export const errorHandler = (err) => {
  // Grab the user interface element
  const ui = document.getElementById("user-interface");

  // Check if the error box is already presenting
  if (document.getElementById("error-container")) {
    ui.removeChild(document.getElementById("error-container"));
  }
  // Close the error container
  const handelClose = () => {
    ui.removeChild(document.getElementById("error-container"));
  };

  // Create the error container
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container");
  errorContainer.setAttribute("id", "error-container");

  // Create the error text
  const errorText = document.createElement("p");
  errorText.classList.add("error-text");
  errorText.textContent = err.message || err || "Error occurred!";

  // Create the error button
  const errorButton = document.createElement("button");
  errorButton.classList.add("error-button");
  errorButton.textContent = "Close";

  // Add event listener to close the error container
  errorButton.addEventListener("click", () => {
    handelClose();
  });

  // Add the error container to the user interface
  errorContainer.appendChild(errorText);
  errorContainer.appendChild(errorButton);
  ui.appendChild(errorContainer);

  // throw err;
};
