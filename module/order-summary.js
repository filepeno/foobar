"use strict";

import { calculateBasePrice, calculateSubTotal, calculateTotal } from "./beer-price";

export function populateOrderSummary() {
  // console.log("ready");
  //check if local storage has order
  if (!localStorage.getItem("order")) {
    // console.log("cart is empty");
  } else {
    const order = JSON.parse(localStorage.getItem("order"));
    // console.log(order);
    displaySummary(order);
    displayTotal(order);
  }
}

function displaySummary(order) {
  //clear parent
  const parent = document.querySelector(".cart-details table");
  parent.innerHTML = "";
  //display each
  order.forEach((obj) => displaySummaryItem(parent, obj));
}

function displaySummaryItem(parent, obj) {
  const template = document.querySelector("#orderItemTemp").content;
  const copy = template.cloneNode(true);
  copy.querySelector("img").src = `assets/beer/${obj.beer.label}`;
  copy.querySelector(".beer-name").textContent = obj.beer.name;
  copy.querySelector(".quantity").textContent = obj.quantity;
  copy.querySelector(".sub-total").textContent = `${calculateSubTotal(calculateBasePrice(obj.beer.alc), obj)} DKK`;
  parent.appendChild(copy);
}

function displayTotal(order) {
  document.querySelector(".beer-total").textContent = `${calculateTotal(order)} DKK`;
}
