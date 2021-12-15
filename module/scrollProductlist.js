export function scrollProductlist() {
  document.querySelector(".scrollArrow2").addEventListener("click", scrollRight);
  document.querySelector(".scrollArrow1").addEventListener("click", scrollLeft);
}

function scrollRight() {
  const lastBeer = document.querySelector(".beersContainer").lastElementChild;
  lastBeer.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollLeft() {
  const firstBeer = document.querySelector(".beersContainer").firstElementChild;
  firstBeer.scrollIntoView({ behavior: "smooth", block: "center" });
}
