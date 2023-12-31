export const errorHandler = (err) => {
  // Close the error container
  const handelClose = () => {
    const errorBox = document.getElementById("error-container");
    errorBox.classList.add("animated-fade-out");

    // Wait for the fade out animation to complete then close the error container
    setTimeout(() => {
      if (document.getElementById("error-container")) {
        // Close the error container
        header.removeChild(errorBox);
      }
    }, 450);
  };

  // Clear existing error box on the page
  if (document.getElementById("error-container")) {
    handelClose();
  }

  // Grab the user interface element
  const header = document.getElementById("header-container");

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
  errorButton.classList.add("close-button");
  errorButton.textContent = "Close";

  // Add event listener to close the error container
  errorButton.addEventListener("click", () => {
    handelClose();
  });

  // Add the error container to the user interface
  errorContainer.appendChild(errorText);
  errorContainer.appendChild(errorButton);
  header.appendChild(errorContainer);

  // Close the error container after 5 seconds
  setTimeout(() => {
    if (document.getElementById("error-container")) {
      handelClose();
    }
  }, 5000);
};
