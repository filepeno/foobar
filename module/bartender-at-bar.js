"use strict";
import { displayFrontBartender } from "./change-bartender-display";
import { getTap } from "./get-tap";
import { animateToTap } from "./move-bartender-to-tap";

export function getBartenderAndTap(bartender, firstTap) {
  const tap = getTap(bartender.usingTap);

  if (firstTap === "first") {
    console.log("bartender goes to his first tap");
    const bt = getBartenderAtCounter(bartender);
    displayFrontBartender(bt.element);
    animateToTap(tap.element, tap.position, bt.element, bt.position, bartender);
  } else {
    console.log("bartender needs to change a tap");
    //move bartender to new tap
    //change display to bartender with beer(s)
    //remove bartender from old tap
  }
}

function getBartenderAtCounter(bartender) {
  const bartenderInDom = document.querySelector(`#${bartender.name}`);
  const bartenderPosition = bartenderInDom.getBoundingClientRect();
  return { element: bartenderInDom, position: bartenderPosition };
}
