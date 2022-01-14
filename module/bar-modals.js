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
  console.log("open modal");
  const template = document.querySelector("#tap-modal-template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".tap-name").textContent = "El Hefe";
  document.querySelector(".bar-foreground").appendChild(copy);
}
function removeAllModals() {
  console.log("remove all modals");
  document.querySelectorAll(".modal").forEach((element) => {
    element.remove();
  });
}
