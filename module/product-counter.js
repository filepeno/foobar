"use strict";

const BeerObject = {
  beer: {},
  quantity: 1,
};

let beerToAdd = {};

export function registerCounter(e) {
  const count = e.target.dataset.counter;
  if (count === "plus") {
    addQuantity();
  } else {
    if (beerToAdd.quantity > 1) {
      removeQuantity();
    } else {
      // console.log("can't add 0 beers to cart");
    }
  }
  displayModalQuantity();
}

export function createBeerObject(beer) {
  const newBeer = Object.create(BeerObject);
  newBeer.beer = beer;
  newBeer.quantity = 1;
  beerToAdd = newBeer;
  // console.log("ready to add to cart:", beerToAdd);
  displayModalQuantity();
}

function addQuantity() {
  //increase quantity by one
  beerToAdd.quantity++;
  // console.log("ready to add to cart:", beerToAdd.quantity, beerToAdd.beer.name);
}

function removeQuantity() {
  //decrease quantity by one
  beerToAdd.quantity--;
  // console.log("ready to add to cart:", beerToAdd.quantity, beerToAdd.beer.name);
}

export function displayModalQuantity() {
  document.querySelector("#modal .beerQuantity").dataset.quantity = beerToAdd.quantity;
  document.querySelector("#modal .beerQuantity").textContent = beerToAdd.quantity;
}

export function getBeerToAdd() {
  return beerToAdd;
}
