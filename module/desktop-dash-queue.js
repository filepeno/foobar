"use strict";

import { calculateDifference, getRandomInt } from "./calculations";

let oldQueue = 0;

const svgsInUse = [];

export function createQueue(queueData, svgs) {
  const queue = queueData.length;

  if (queue > oldQueue) {
    //calculate difference between how many was and is now
    const difference = calculateDifference(queue, oldQueue);
    //check if queue is longer than 8
    if (queue > 8) {
      // console.log("queue is longer than 8 people");
      //TODO: add all single svgs
      //todo: add queue groups based on queue length
    } else {
      //send the difference as params to addQueue
      addQueue(svgs, difference);
      oldQueue = queue;
    }
  } else if (queue < oldQueue) {
    //check if length is not 0
    if (oldQueue > 0) {
      //calculate difference between how many was and is now
      const difference = calculateDifference(queue, oldQueue);
      //send the difference as params to removeQueue
      removeQueue(difference);
      oldQueue = queue;
    }
  }
}

// function addQueueGroups(){}

function addQueue(svgs, max) {
  //loop max times
  for (let i = 0; i < max; i++) {
    createQueueSvg(svgs);
  }
}

function createQueueSvg(svgs) {
  //get random customer from array based on arr length
  const randomIndex = getRandomInt(svgs.length);
  //check that index is not in use
  const isInUse = checkIfSvgInUse(randomIndex);
  if (isInUse === false) {
    // grab parent
    const parent = document.querySelector(".queue");
    // create a new div element
    const newQueueElement = document.createElement("div");
    newQueueElement.classList.add("queue-single", "fade-in");
    //create inside element
    newQueueElement.innerHTML = svgs[randomIndex];
    //push index in the array of svgsInUse
    svgsInUse.push(randomIndex);
    // add the newly created element and its content into the DOM
    parent.appendChild(newQueueElement);
  } else {
    createQueueSvg(svgs);
  }
}

function checkIfSvgInUse(number) {
  return svgsInUse.some((index) => index === number);
}

function removeQueue(max) {
  const parent = document.querySelector(".queue");
  for (let i = 0; i < max; i++) {
    //remove first element in array
    svgsInUse.shift();
    const queueElement = parent.firstElementChild;
    const fadeOutAnimation = queueElement.animate(
      [
        {
          opacity: 0,
        },
      ],
      {
        duration: 400,
        easing: "linear",
      }
    );
    fadeOutAnimation.onfinish = () => {
      queueElement.remove();
    };
  }
}
