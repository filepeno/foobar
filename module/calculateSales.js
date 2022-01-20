import { displayChart } from "./displayChart";

let beerArray = {
  elHefe: 0,
  fairy: 0,
  githop: 0,
  hollaback: 0,
  hoppily: 0,
  mowintime: 0,
  row26: 0,
  ruined: 0,
  sleighride: 0,
  steampunk: 0,
};

let arrayId = new Array();
// let flag = false;

export function calculateSales(tapData) {
  const allOrder = tapData.serving;

  // if (flag == false) {
  //   allOrder.forEach((id) => {
  //     arrayId.push(id.id);
  //     flag = true;
  //   });
  //   // console.log("flag" + flag);
  //   checkAllOrder(allOrder);
  // }

  // console.log(arrayId);

  if (tapData.serving.hasOwnProperty(0)) {
    // console.log("exist");
    if (tapData.serving[0].id != arrayId[0]) {
      const x = 0;
      checkOneOrder(x);
      arrayId[0] = tapData.serving[0].id;
    }
  }
  if (tapData.serving.hasOwnProperty(1)) {
    // console.log("exist");
    if (tapData.serving[1].id != arrayId[1]) {
      const x = 1;
      checkOneOrder(x);
      arrayId[1] = tapData.serving[1].id;
    }
  }
  if (tapData.serving.hasOwnProperty(2)) {
    // console.log("exist");
    if (tapData.serving[2].id != arrayId[2]) {
      const x = 2;
      checkOneOrder(x);
      arrayId[2] = tapData.serving[2].id;
    }
  }
  if (tapData.serving.hasOwnProperty(3)) {
    // console.log("exist");
    if (tapData.serving[3].id != arrayId[3]) {
      const x = 3;
      checkOneOrder(x);
      arrayId[3] = tapData.serving[3].id;
    }
  }

  function checkOneOrder(x) {
    // // console.log(tapData.serving[x].order);
    tapData.serving[x].order.forEach((item) => {
      // // console.log(item);
      switch (item) {
        case "El Hefe":
          beerArray.elHefe += 1;
          // elHefe++;
          // console.log(beerArray.elHefe);
          break;
        case "Fairy Tale Ale":
          beerArray.fairy += 1;
          // console.log(beerArray.fairy);
          break;
        case "GitHop":
          beerArray.githop += 1;
          // console.log(beerArray.githop);
          break;
        case "Hollaback Lager":
          beerArray.hollaback += 1;
          // console.log(beerArray.hollaback);
          break;
        case "Hoppily Ever After":
          beerArray.hoppily += 1;
          // console.log(beerArray.hoppily);
          break;
        case "Mowintime":
          beerArray.mowintime += 1;
          // console.log(beerArray.mowintime);
          break;
        case "Row 26":
          beerArray.row26 += 1;
          // console.log(beerArray.row26);
          break;
        case "Ruined Childhood":
          beerArray.ruined += 1;
          // console.log(beerArray.ruined);
          break;
        case "Sleighride":
          beerArray.sleighride += 1;
          // console.log(beerArray.sleighride);
          break;
        case "Steampunk":
          beerArray.steampunk += 1;
          // console.log(beerArray.steampunk);
          break;
      }
    });
  }

  function checkAllOrder(allOrder) {
    allOrder.forEach((order) => {
      const itemOrder = order.order;

      itemOrder.forEach((item) => {
        // console.log(item);

        switch (item) {
          case "El Hefe":
            beerArray.elHefe += 1;
            // elHefe++;
            break;
          case "Fairy Tale Ale":
            beerArray.fairy += 1;
            break;
          case "GitHop":
            beerArray.githop += 1;
            break;
          case "Hollaback Lager":
            beerArray.hollaback += 1;
            break;
          case "Hoppily Ever After":
            beerArray.hoppily += 1;
            break;
          case "Mowintime":
            beerArray.mowintime += 1;
            break;
          case "Row 26":
            beerArray.row26 += 1;
            break;
          case "Ruined Childhood":
            beerArray.ruined += 1;
            break;
          case "Sleighride":
            beerArray.sleighride += 1;
            break;
          case "Steampunk":
            beerArray.steampunk += 1;
            break;
        }
      });
    });
  }

  // console.log("elHefe " + beerArray.elHefe);
  // console.log("fairy " + beerArray.fairy);
  // console.log("githop " + beerArray.githop);
  // console.log("hollaback " + beerArray.hollaback);
  // console.log("hoppily " + beerArray.hoppily);
  // console.log("mowintime " + beerArray.mowintime);
  // console.log("row26 " + beerArray.row26);
  // console.log("ruined " + beerArray.ruined);
  // console.log("sleighride " + beerArray.sleighride);
  // console.log("steampunk " + beerArray.steampunk);

  const sortBeer = Object.entries(beerArray).sort(([, a], [, b]) => b - a);

  displayChart(sortBeer);
}
