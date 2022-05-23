const categoriesEl = document.querySelectorAll("li.item");

const calculateCategoriesQuantity = () => {
    console.log(`Number of categories: ${categoriesEl.length}
    `);
};

const consoleCategoryInfo = () => {
    categoriesEl.forEach(category => {
    console.log(`Category: ${category.firstElementChild.textContent}`);
    console.log(`Elements: ${category.lastElementChild.children.length}
    `);
})
};

calculateCategoriesQuantity();
consoleCategoryInfo();