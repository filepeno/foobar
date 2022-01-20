export function fetchData() {
  var orders = JSON.parse(localStorage.getItem("order"));
  // console.log(JSON.parse(localStorage.getItem("order")));

  const form = document.querySelector(".form");
  form.addEventListener("submit", logSubmit);

  // console.log(localStorage.getItem("order"));
}

function logSubmit(event) {
  event.preventDefault();
  // console.log("submit");
}
