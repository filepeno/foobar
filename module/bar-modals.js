"use strict";

let newInterval;

export function registerClickOnTaps() {
  const taps = document.querySelectorAll(".taps");
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
    matchData(el);
  } else {
    removeAllModals();
    clearInterval(newInterval);
  }
}

async function matchData(el) {
  console.log(el);
  let data = await fetchData();

  //find relevant data
  const keyword = el.classList[1];
  if (data.hasOwnProperty(keyword)) {
    const matchedData = data[keyword];
    //find exact data based on el id #
    const elNumber = el.id.charAt(el.id.length - 1);
    openModal(keyword, el, matchedData[elNumber]);
  }
}

function openModal(kw, el, data) {
  removeAllModals();
  console.log("open modal for", kw, el, data);
  let template;
  let copy;
  //create and populate modal for taps
  if (kw === "taps") {
    template = document.querySelector("#tap-modal-template").content;
    copy = template.cloneNode(true);
    copy.querySelector(".tap-name").textContent = `"${data.beer}"`;
    //calculate percentage
    displayPercentage(copy, data);
  }
  //append
  document.querySelector(".bar-foreground").appendChild(copy);
  const newModal = document.querySelector(".modal");
  //make invisible
  newModal.style.visibility = "hidden";
  moveModal(newModal, el);
  newInterval = setInterval(() => updateModalContent(newModal), 5000);
}

function removeAllModals() {
  console.log("remove all modals");
  document.querySelectorAll(".modal").forEach((element) => {
    element.remove();
  });
}

function moveModal(modal, el) {
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

async function fetchData() {
  const url = "https://hangover3.herokuapp.com/";
  const res = await fetch(url);
  const jsonData = await res.json();
  return jsonData;
}

function displayPercentage(clone, data) {
  //calculate percentage
  const percentage = Math.round((parseInt(data.level) / 2500) * 100) + "%";
  clone.querySelector(".tap-percentage").textContent = percentage;

  if (parseInt(percentage) <= 70 && parseInt(percentage) > 40) {
    console.log(data.beer + " low");
    // clone.querySelector(".tap-percentage").style.color = "orange";
    clone.querySelector(".tap-icon").src = "/assets/beer/low.svg";
  } else if (parseInt(percentage) <= 40) {
    console.log(data.beer + "  very low");
    // clone.querySelector(".tap-percentage").style.color = "red";
    clone.querySelector(".tap-icon").src = "/assets/beer/very-low.svg";
  } else {
    // clone.querySelector(".tap-percentage").style.color = "green";
    clone.querySelector(".tap-icon").src = "/assets/beer/full.svg";
  }
}

function updateModalContent(modal) {
  console.log("update modal", modal);
}
