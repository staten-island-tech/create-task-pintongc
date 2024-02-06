import { DOMSelectors } from "./doms";
import { menu } from "./nutritionfacts";

const filterTypes = ["breakfast", "burgers", "chicken", "sides", "drinks"];

const filteredMenu = filterTypes.map((type) => [
  type,
  menu.filter((menu) => menu.type === type),
]);

console.log(filteredMenu);

const createCard = function (menu) {
  DOMSelectors.gallery.insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
        <div class="card-title">${menu.item}</div>
        <img src="${menu.image}" alt="${menu.item}">
        <div class="card-desc"><h1></h1></div>
      </div>`
  );
};

const createAllCards = () => {
  menu.forEach((menu) => createCard(menu));
};

createAllCards();

function deleteAllCards() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => card.remove());
}

let buttons = document.querySelectorAll(".food-btn");

buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    const filter = btn.textContent.toLowerCase();
    deleteAllCards();
    if (filter === "all") {
      createAllCards();
    } else {
      menu
        .filter((menu) => menu.type.includes(filter))
        .forEach((menu) => createCard(menu));
    }
  })
);

DOMSelectors.selection.addEventListener("change", function () {
  const a = getProteinDividedbyPrice(menu);
  const b = getCaloriesDividedbyPrice(menu);
  console.log(a, b);
});

function getProteinDividedbyPrice(menu) {
  let measure1 = document.getElementById("measure1").value.toLowerCase();
  console.log(measure1);
  if (measure1 === "protein") {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const itemName = card.querySelector(".card-title").textContent;
      const menuItem = menu.find((item) => item.item === itemName);
        if (menuItem) {
        let a = menuItem.protein / menuItem.price;
        const b = Math.round(a * 100) / 100;
        const prooverprice = card.querySelector(".card-desc");
        if (prooverprice) {
          prooverprice.textContent = `Protein per Dollar: ${b}`;
        }
      }
    })
  }
};

function getCaloriesDividedbyPrice(menu) {
  let measure1 = document.getElementById("measure1").value.toLowerCase();
  console.log(measure1);
   if (measure1 === "calories") {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const itemName = card.querySelector(".card-title").textContent;
      const menuItem = menu.find((item) => item.item === itemName);
        if (menuItem) {
        let a = menuItem.calories / menuItem.price;
        const b = Math.round(a * 100) / 100;
        const caloriesOverPrice = card.querySelector(".card-desc");
        if (caloriesOverPrice) {
          caloriesOverPrice.textContent = `Calories per Dollar: ${b}`;
        }
      }
    })
  }
};
