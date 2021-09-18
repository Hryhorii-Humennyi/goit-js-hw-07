const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
const ulList = document.getElementById("ingredients");
const food = ingredients.map(ingredients => {
    const items = document.createElement("li");
    ulList.appendChild(items);
    items.textContent = ingredients;
});
