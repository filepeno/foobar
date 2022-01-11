("use strict");

import { displayQues } from "./displayQues";
import { displayTapLevels } from "./displayTapLevels";
import { displayKegInventory } from "./displayKegInventory";
import { displayBartenders } from "./displayBartenders";
import { calculateSales } from "./calculateSales";
import { collapsible } from "./collapsible";

window.addEventListener("DOMContentLoaded", init);

async function init() {
  const url = "https://hangover3.herokuapp.com/";

  console.log("init");

  fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {
      prepareAllData(jsonData);
      setTimeout(init, 1000);
    });
}

function prepareAllData(jsonData) {
  console.log(jsonData);

  displayQues(jsonData);
  displayTapLevels(jsonData);
  displayKegInventory(jsonData);
  displayBartenders(jsonData);
  calculateSales(jsonData);
  collapsible();
}

// if (window.matchMedia("(max-device-width: 414px)").matches) {
//   document.querySelector(".dash-container").style.display = "block";
//   document.querySelector(".db-bar-view").style.display = "none";
// }
// else {
//   document.querySelector(".dash-container").style.display = "none";
// }
