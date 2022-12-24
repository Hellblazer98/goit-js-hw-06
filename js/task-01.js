const items = document.querySelectorAll('.item');

console.log(`Number of categories: ${items.length}`);

items.forEach(function getCategories(item) {
    const title = item.querySelector("h2");
    const elements = item.querySelector("ul");
    const elQuantity = elements.children;
    console.log(`Category: ${title.textContent}`);
    console.log(`Elements: ${elQuantity.length}`);
});