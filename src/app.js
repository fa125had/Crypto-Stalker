"use strict";

import { errorHandler } from "./utils/errorHandler.js";
import { renderWelcome } from "./views/welcome/welcomeView.js";
import { renderHeader } from "./views/header/headerView.js";
import {
  initContents,
  initContentsReload,
} from "./controllers/contentsController.js";
import { renderFooter } from "./views/footer/footerView.js";

// Grab UI elements
const ui = document.getElementById("user-interface");

// Load the welcome view
const intWelcome = async () => {
  const welcome = await renderWelcome();
  ui.appendChild(welcome);

  // Remove the welcome view from the DOM
  ui.removeChild(ui.firstChild);
};

// Load the Header
const initHeader = async () => {
  ui.appendChild(renderHeader());
};
// Load the Contents
const renderContents = async () => {
  const contents = await initContents(["usd"]);
  ui.appendChild(contents);

  // Grab vs currency selector
  const currencySelector = document.getElementById("currency-selector");
  let vsCurrency = currencySelector.value;

  currencySelector.addEventListener("change", ({ target }) => {
    vsCurrency = target.value;
    initContentsReload(vsCurrency);
  });

  // Set interval to reload the contents
  setInterval(async () => {
    await initContentsReload(vsCurrency);
  }, 61 * 1000);
};

// Load the Footer
const initFooter = async () => {
  // Render the footer
  ui.appendChild(renderFooter());
};

// Start the application
const inits = async () => {
  try {
    await intWelcome();
    await initHeader();
    await renderContents();
    await initFooter();
  } catch (error) {
    errorHandler(error);
  }
};

document.addEventListener("DOMContentLoaded", () => inits());
