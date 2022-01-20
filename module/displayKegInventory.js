export function displayKegInventory(kegData) {
  // console.log(kegData.storage);

  document.querySelector("#dash-keg .content").innerHTML = "";

  const allKeg = kegData.storage;

  allKeg.forEach((element) => {
    // console.log(element.name + ": " + element.amount);

    const clone = document.querySelector("template#keg-inventory").content.cloneNode(true);

    clone.querySelector(".keg-name").textContent = element.name;
    clone.querySelector(".keg-left").textContent = element.amount;

    if (parseInt(element.amount) <= 7 && parseInt(element.amount) > 4) {
      clone.querySelector(".keg-left").style.color = "orange";
    } else if (parseInt(element.amount) <= 4) {
      clone.querySelector(".keg-left").style.color = "red";
    } else {
      clone.querySelector(".keg-left").style.color = "green";
    }

    document.querySelector("#dash-keg .content").appendChild(clone);
  });
}
