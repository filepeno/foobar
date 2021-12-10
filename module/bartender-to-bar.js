"use strict";
import { getTap } from "./get-tap";
import { getBartenderSpotAtCounter, getBartenderAtBar } from "./get-bartender";
import { importBartenderSvg } from "./import-bartender-svg";
import { animateToDestination } from "./move-bartender";

export function getBartenderAndTap(bartender, firstTap) {
  const tap = getTap(bartender.usingTap);

  if (firstTap === "first") {
    console.log("bartender goes to his first tap");
    const bt = getBartenderSpotAtCounter(bartender);
    importBartenderSvg(bartender, "front", bt.element);
    animateToDestination(tap.element, tap.position, bt.element, bt.position, bartender);
  } else {
    console.log("bartender needs to change a tap");
    //move bartender to new tap
    const bt = getBartenderAtBar(bartender);
    animateToDestination(tap.element, tap.position, bt.element, bt.position, bartender);
    //change display to bartender with beer(s)
    //remove bartender from old tap
  }
}
