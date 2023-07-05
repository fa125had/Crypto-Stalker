export const errorHandler = (err) => {
  // Grab the user interface element
  const ui = document.getElementById("user-interface");
  // Create the error container
  const errorContainer = document.createElement("div");
  errorContainer.classList.add("error-container");
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
    ui.removeChild(errorContainer);
  });
  // Add the error container to the user interface
  errorContainer.appendChild(errorText);
  errorContainer.appendChild(errorButton);
  ui.appendChild(errorContainer);

  throw err;
};
