export function postData(event) {
  event.preventDefault();
  // console.log("ready to post");

  const order = JSON.parse(localStorage.getItem("order"));

  //map array by order names and quantities
  const cleanedOrder = order.map(getNameAndQuantity);
  // console.log(cleanedOrder);

  const postData = JSON.stringify(cleanedOrder);

  fetch("https://hangover3.herokuapp.com/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: postData,
  })
    .then((res) => res.json(), // console.log("posted"))
    .catch((err) => {
      console.error(err);
    });

  // console.log(postData);
  setTimeout(openPage, 2500);
}

function openPage() {
  window.location.href = "/thank-you.html";
}

function getNameAndQuantity(orderObj) {
  let newObject = {};
  newObject.name = orderObj.beer.name;
  newObject.amount = orderObj.quantity;
  return newObject;
}
