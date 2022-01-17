export function collapsible() {
  const coll = document.querySelectorAll(".collapsible");
  // let i;
  coll.forEach((element) => {
    element.addEventListener("click", function () {
      console.log("clicked on", this);
      toggleActiveElement(this, coll);
      // this.classList.toggle("active");
    });
  });
}

function toggleActiveElement(el, allEls) {
  el.classList.toggle("active");
  const content = el.nextElementSibling;
  if (el.classList[1] === "active") {
    content.style.display = "block";
    allEls.forEach((element) => {
      if (el !== element) {
        element.classList.remove("active");
        element.nextElementSibling.style.display = "none";
      }
    });
  } else {
    content.style.display = "none";
  }
}
