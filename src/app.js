"use strict";

import { errorHandler } from "./utils/errorHandler.js";
import { renderWelcome } from "./views/welcome/welcomeView.js";
import { initHeader, initHeaderReload} from "./controllers/headerController.js";
import { renderContents } from "./views/contents/contentsView.js";
import { renderFooter } from "./views/footer/footerView.js";

const ui = document.getElementById("user-interface");

// Load and Render the welcome view
const intWelcome = async () => {
  const welcome = await renderWelcome();
  ui.appendChild(welcome);

  // Remove the welcome view from the DOM
  ui.removeChild(ui.firstChild);
};

// Load and Render the Header
const renderHeader = async () => {
  let header = await initHeader();
  ui.appendChild(header);

  // Set a timer to reload the header
  setInterval(() => {initHeaderReload()}, 60000);
};

// Load and Render the Contents
const initContents = async () => {
  // Render the contents
  ui.appendChild(renderContents());
};

// Load and Render the Footer
const initFooter = async () => {
  // Render the footer
  ui.appendChild(renderFooter());
};

// Start the application
const inits = async () => {
  try {
    await intWelcome();
    await renderHeader();
    await initContents();
    await initFooter();
  } catch (error) {
    errorHandler(error);
  }
};

document.addEventListener("DOMContentLoaded", () => inits());
