import { render } from "sass";

let firstLoad = true;

export function displayChart(sortBeer) {
  document.querySelector(".chart").innerHTML = "";

  const newDiv = document.createElement("canvas");
  newDiv.id = "myChart";
  document.querySelector(".chart").appendChild(newDiv);
  if (firstLoad === true) {
    openSalesCollapsible();
  }
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [sortBeer[0][0], sortBeer[1][0], sortBeer[2][0], sortBeer[3][0], sortBeer[4][0]],
      datasets: [
        {
          label: "Top 5 Beer",
          data: [sortBeer[0][1], sortBeer[1][1], sortBeer[2][1], sortBeer[3][1], sortBeer[4][1]],
          backgroundColor: ["#c8f42e", "#c8f42e", "#c8f42e", "#c8f42e", "#c8f42e"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      animation: false,
    },
  });

  Chart.defaults.color = "white";
}

// ****chart two****
// const newDiv2 = document.createElement("canvas");
// newDiv2.id = "myChart2";
// document.querySelector(".chart").appendChild(newDiv2);

// const ctx2 = document.getElementById("myChart2");
// const myChart2 = new Chart(ctx2, {
//   type: "bar",
//   data: {
//     labels: ["Mowintime", "Row26", "Ruined", "Sleighride", "Steampunk"],
//     datasets: [
//       {
//         label: "Beer Orders",
//         data: [mowintime, row26, ruined, sleighride, steampunk],
//         backgroundColor: [
//           "#c8f42e",
//           "#c8f42e",
//           "#c8f42e",
//           "#c8f42e",
//           "#c8f42e",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   },
//   options: {
//     legend: false,
//     scales: {
//       y: {
//         beginAtZero: true,
//       },
//     },
//     animation: false,
//   },
// });

/* Open "Sales"-collapsible content on load */
function openSalesCollapsible() {
  const salesButton = document.querySelector("#dash-chart .collapsible");
  salesButton.classList.add("active");
  const content = salesButton.nextElementSibling;
  content.style.maxHeight = content.scrollHeight + "px";
  firstLoad = false;
}
