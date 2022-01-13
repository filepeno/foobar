"use strict";

export function registerClickOnTaps() {
  const taps = document.querySelectorAll(".tap");
  taps.forEach((tap) => {
    tap.addEventListener("click", () => {
      console.log("clicked on tap", tap);
      toggleActiveElement(tap, taps);
    });
  });
}

function toggleActiveElement(el, allEls) {
  allEls.forEach((element) => {
    if (el !== element) {
      element.classList.remove("bar-el-active");
    }
  });
  el.classList.toggle("bar-el-active");
}
