const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

const createListItem = (text) => {
  const item = document.createElement("li");
  item.textContent = text;
  item.classList.add("item");
  return item;
};

list.append(...ingredients.map(ingredient => createListItem(ingredient)));