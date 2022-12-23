const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector("#ingredients");

const elements = ingredients.map(item => {
  const listItem = document.createElement('li');
  const listContent = listItem.textContent = item;
  const addClass = listItem.classList.add("item");

  return listItem;
});

console.log(elements);

ingredientsContainer.append(...elements);