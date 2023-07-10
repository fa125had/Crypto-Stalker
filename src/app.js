"use strict";

import { errorHandler } from "./utils/errorHandler.js";
import { renderWelcome } from "./views/welcome/welcomeView.js";
import { initHeader, initHeaderReload} from "./controllers/headerController.js";
import { initContents, initContentsReload } from "./controllers/contentsController.js";
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
  setInterval(() => {initHeaderReload()}, 10000);
};

// Load and Render the Contents
const renderContents = async () => {
  const contents = await initContents();
  ui.appendChild(contents);

  // Set interval to reload the contents
  setInterval(() => {initContentsReload()}, 120000);
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
    // await renderHeader();
    await renderContents();
    await initFooter();
  } catch (error) {
    errorHandler(error);
  }
};

document.addEventListener("DOMContentLoaded", () => inits());
