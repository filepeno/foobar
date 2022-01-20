const form = document.querySelector(".form");
form.addEventListener("submit", logSubmit);

document.querySelector("#log-guest").addEventListener("click", logSubmit);

document.querySelector(".login-notfound").style.visibility = "hidden";
document.querySelector(".login-notfound").style.color = "red";
document.querySelector(".login-notfound").style.fontSize = "0.7rem";
document.querySelector(".login-notfound").style.textAlign = "right";

function logSubmit(event) {
  event.preventDefault();
  // console.log(document.activeElement.value);

  if (document.activeElement.value === "signin") {
    if (document.getElementById("email").value !== "diana@gmail.com") {
      document.querySelector(".login-notfound").style.visibility = "visible";
      // console.log("error");
    } else {
      document.querySelector(".login-notfound").style.visibility = "hidden";

      window.location.href = "/form-login.html?status=login";
    }
  } else if (document.activeElement.value === "guest") {
    window.location.href = "/form-login.html?status=guest";
  }
}
