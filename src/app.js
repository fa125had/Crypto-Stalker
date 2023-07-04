"use strict";

import { renderHeader } from "./views/header/headerView.js";
import { renderWelcome } from "./views/welcome/welcomeView.js";
import { renderFooter } from "./views/footer/footerView.js";
import { fetchDataAndUpdateView } from "./controllers/apiController.js";

const ui = document.getElementById("user-interface");
const welcome = renderWelcome();
const header = renderHeader();
const dynamicData = await fetchDataAndUpdateView();
const footer = renderFooter();

const clearUi = () => ui.innerHTML = "";

// Close the welcome
const init = () => {
  clearUi();
  ui.appendChild(welcome);
  clearUi();
  ui.appendChild(header);
  dynamicData ? ui.appendChild(dynamicData) : null;
  ui.appendChild(footer);
};

document.onload = await init();
