"use strict";

let newInterval;
let clickableElsArray = [];

export function trackClickOnClickableElements() {
  const clickableEls = document.querySelectorAll(".clickable");
  clickableEls.forEach((el) => {
    if (checkIfElExistsInArray(el) === false) {
      clickableElsArray.push(el);
      el.addEventListener("click", () => {
        console.log("clicked", el);
        toggleActiveElement(el, clickableElsArray);
      });
    }
  });
  // console.log(clickableElsArray);
}

function checkIfElExistsInArray(newEl) {
  return clickableElsArray.some((element) => element === newEl);
}

// export function removeClickableElfromArray(oldEl) {
//   console.log(clickableElsArray.indexOf(oldEl));
// }

async function toggleActiveElement(el, allEls) {
  /* remove class from others */
  allEls.forEach((element) => {
    if (el !== element) {
      element.classList.remove("bar-el-active");
    }
  });
  el.classList.toggle("bar-el-active");
  /* check if contains active class */
  if (el.classList.contains("bar-el-active")) {
    //find relevant data
    const keyword = el.classList[1];
    const data = await matchData(keyword, el);

    createModal(keyword, el, data);
  } else {
    removeAllModals();
    toggleAllElementsOff();
    clearInterval(newInterval);
  }
}

async function matchData(kw, el) {
  let data = await fetchData();
  let matchedData;
  if (kw === "taps") {
    matchedData = data[kw];
    //find exact data based on el id #
    const elNumber = el.id.charAt(el.id.length - 1);
    return matchedData[elNumber];
  } else if (kw === "serving") {
    console.log("clicked on customer");
    //find bartender name in container
    //find bartender data and id of customer served
    //find customer with that id in data
    //return matchedData
  }
}

function createModal(kw, el, data) {
  removeAllModals();
  const template = document.querySelector(`#${kw}-modal-template`).content;
  const copy = template.cloneNode(true);
  //create and populate modal for taps
  if (kw === "taps") {
    changeTapModalContent(copy, data);
    //append
    document.querySelector(".bar-foreground").appendChild(copy);
  }

  const newModal = document.querySelector(".modal");
  //make invisible
  newModal.style.visibility = "hidden";
  moveModal(newModal, el);
  newInterval = setInterval(() => updateModalContent(kw, el, newModal), 1000);
  trackClickOutsideModal(newModal);
}

function trackClickOutsideModal(modal) {
  document.querySelector(".db-bar-view").onclick = (e) => {
    //check if didn't click on modal
    if (e.target === modal || e.target.closest(".modal") !== null) {
      console.log("clicked modal");
    } else {
      removeAllModals();
      toggleAllElementsOff();
    }
  };
}

function toggleAllElementsOff() {
  const allClickable = document.querySelectorAll(".clickable");
  allClickable.forEach((clickable) => {
    clickable.classList.remove("bar-el-active");
  });
}

function removeAllModals() {
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
    // clone.querySelector(".tap-percentage").style.color = "orange";
    clone.querySelector(".tap-icon").src = "/assets/beer/low.svg";
  } else if (parseInt(percentage) <= 40) {
    // clone.querySelector(".tap-percentage").style.color = "red";
    clone.querySelector(".tap-icon").src = "/assets/beer/very-low.svg";
  } else {
    // clone.querySelector(".tap-percentage").style.color = "green";
    clone.querySelector(".tap-icon").src = "/assets/beer/full.svg";
  }
}

async function updateModalContent(kw, el, modal) {
  //get new data
  const data = await matchData(kw, el);
  if (kw === "taps") {
    changeTapModalContent(modal, data);
  }
}

function changeTapModalContent(modal, data) {
  modal.querySelector(".tap-number").textContent = `Tap #${data.id + 1}`;
  modal.querySelector(".tap-name").textContent = `"${data.beer}"`;
  displayPercentage(modal, data);
}
