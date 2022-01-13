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
  /* remove class from others */
  allEls.forEach((element) => {
    if (el !== element) {
      element.classList.remove("bar-el-active");
    }
  });
  el.classList.toggle("bar-el-active");
  /* check if contains active class */
  if (el.classList.contains("bar-el-active")) {
    openModal();
  } else {
    removeAllModals();
  }
}

function openModal() {
  removeAllModals();
  console.log("create modal");
}
function removeAllModals() {
  console.log("remove all modals");
}
