// створюємо змінну яка буде мати посилання на ul//
const categoriesList = document.querySelector(`#categories`);
 // створюємо змінну в якій будуть усі li.item//
const items = categoriesList.querySelectorAll(`.item`);
// виводимо кількість//
console.log(`Number of categories: ${items.length}`);
//проходимось по кожному елементу, щоб отримати заголовок-назву категорії//
 items.forEach(item) => {
    const categoryTitle = item.querySelector(`h2`).textContent;
    //отримуємо кількість li в  ul//
    const elementsCount = item.querySelectorAll(`ul li`).length;
    console.log(`Category : $ {categoryTitle}`);
    console.log(`Elements : ${elementsCount}`);
};