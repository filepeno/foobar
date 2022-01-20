import { peterCalculate, peterCalculatePost, klausCalculate, klausCalculatePost, jonasCalculate, jonasCalculatePost, dannieCalculate, dannieCalculatePost } from "./peterCalculate";

export function displayBartenders(bartenderData) {
  // console.log(bartenderData.bartenders);

  document.querySelector("#dash-bartender .content").innerHTML = "";

  const allBartender = bartenderData.bartenders;

  allBartender.forEach((element) => {
    /*     console.log(
      element.name +
        " " +
        "Status: " +
        element.statusDetail +
        " " +
        "| Serving customer: " +
        element.servingCustomer
    ); */

    const clone = document.querySelector("template#bartender").content.cloneNode(true);

    clone.querySelector(".bartender-name").textContent = element.name;

    switch (element.statusDetail) {
      case "waiting":
        clone.querySelector(".bartender-status .span").textContent = "Waiting next task";
        break;

      case "startServing":
        clone.querySelector(".bartender-status .span").textContent = "Serving customer";

        switch (element.name) {
          case "Peter":
            clone.querySelector(".bartender-total-order .span").textContent = peterCalculate();
            break;

          case "Klaus":
            clone.querySelector(".bartender-total-order .span").textContent = klausCalculate();
            break;
          case "Jonas":
            clone.querySelector(".bartender-total-order .span").textContent = jonasCalculate();
            break;
          case "Dannie":
            clone.querySelector(".bartender-total-order .span").textContent = dannieCalculate();
            break;
        }
        break;

      case "reserveTap":
        clone.querySelector(".bartender-status .span").textContent = "Waiting for beer tap ";
        break;
      case "pourBeer":
        clone.querySelector(".bartender-status .span").textContent = "Pouring beer in tap " + element.usingTap;
        break;
      case "releaseTap":
        clone.querySelector(".bartender-status .span").textContent = "Releasing tap";
        break;
      case "receivePayment":
        clone.querySelector(".bartender-status .span").textContent = "Receiving payment";
        break;
      case "replaceKeg":
        clone.querySelector(".bartender-status .span").textContent = "Replacing empty keg";
        break;
    }

    switch (element.name) {
      case "Peter":
        clone.querySelector(".bartender-total-order .span").textContent = peterCalculatePost();
        break;
      case "Klaus":
        clone.querySelector(".bartender-total-order .span").textContent = klausCalculatePost();
        break;
      case "Jonas":
        clone.querySelector(".bartender-total-order .span").textContent = jonasCalculatePost();
        break;
      case "Dannie":
        clone.querySelector(".bartender-total-order .span").textContent = dannieCalculatePost();
        break;
    }

    clone.querySelector(".bartender-serve .span").textContent = "Serving customer: " + element.servingCustomer;

    document.querySelector("#dash-bartender .content").appendChild(clone);
  });
}
