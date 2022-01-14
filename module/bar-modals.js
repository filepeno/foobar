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
    openModal(el);
  } else {
    removeAllModals();
  }
}

function openModal(el) {
  removeAllModals();
  console.log("open modal");
  const template = document.querySelector("#tap-modal-template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".tap-name").textContent = "El Hefe";
  document.querySelector(".bar-foreground").appendChild(copy);
  const newModal = document.querySelector(".modal");
  //make invisible
  newModal.style.visibility = "hidden";
  moveModal(newModal, el);
}
function removeAllModals() {
  console.log("remove all modals");
  document.querySelectorAll(".modal").forEach((element) => {
    element.remove();
  });
}

function moveModal(modal, el) {
  console.log(modal, el);
  const pos1 = modal.getBoundingClientRect();
  const pos2 = el.getBoundingClientRect();
  const deltaX = pos2.left - pos1.left;
  const deltaY = pos2.top - pos1.top;
  //   const deltaY = pos1.top - pos2.bottom;
  console.log("move modal");
  const moveModule1 = modal.animate(
    [
      {
        transformOrigin: "center",
        transform: `translateX(${deltaX - 37}px)
        translateY(${deltaY - 100}px)`,
      },
    ],
    {
      duration: 1,
      fill: "both",
    }
  );
  moveModule1.onfinish = () => {
    console.log("move up and down");
    modal.style.visibility = "visible";
    const moveModule2 = modal.animate(
      [
        {
          transformOrigin: "center",
          transform: "translateY(-5px)",
        },
      ],
      {
        duration: 2000,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
        composite: "add",
      }
    );
  };
}
