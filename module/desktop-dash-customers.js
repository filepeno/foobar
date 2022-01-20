"use strict";

import { getCustomerSvgs } from "./desktop-dash";
import { getRandomInt } from "./calculations";
import { trackClickOnClickableElements } from "./bar-modals";

let customers = [];

let bartenderCustomers = [
  {
    btName: "Klaus",
    customer: "",
  },
  {
    btName: "Jonas",
    customer: "",
  },
  {
    btName: "Peter",
    customer: "",
  },
  {
    btName: "Dannie",
    customer: "",
  },
];

export async function toggleCustomer(bartender) {
  const customerContainer = document.querySelector(`#customer-${bartender.name}`);
  if (bartender.statusDetail !== "waiting") {
    //get initial svgs and add to array
    if (customers.length === 0) {
      customers = getCustomerSvgs();
    }

    const randomCustomerIndex = getRandomCustomerIndex();
    const numberAsText = randomCustomerIndex.toString();
    //check that customer svg is not in use
    const isInUse = checkIfSvgInUse(numberAsText);

    if (isInUse === false) {
      customerContainer.innerHTML = customers[randomCustomerIndex];
      customerContainer.style.visibility = "visible";
      //set svg inde in array as the customer bartender is serving in bartenderCustomers
      bartenderCustomers.forEach((bt) => {
        if (bt.btName === bartender.name) {
          bt.customer = numberAsText;
        }
      });
      trackClickOnClickableElements();
    } else {
      //run toggleFunction again
      toggleCustomer(bartender);
    }
  } else {
    // const clickableEl = customerContainer.querySelector(".clickable");
    // // console.log("remove", clickableEl);
    // removeClickableElfromArray(clickableEl);
    customerContainer.innerHTML = "";
    customerContainer.style.visibility = "hidden";
  }
}

function getRandomCustomerIndex() {
  //get random customer from array
  const randomNumber = getRandomInt(customers.length);
  return randomNumber;
}

function checkIfSvgInUse(number) {
  return bartenderCustomers.some((bt) => bt.customer === number);
}
