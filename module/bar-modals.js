"use strict";

export function registerClickOnTaps() {
  document.querySelectorAll(".tap").forEach((tap) => {
    tap.addEventListener("click", () => console.log("clicked on tap", tap));
  });
}
