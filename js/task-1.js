// const categoriesRef = document.querySelectorAll("#categories")
// console.log(categoriesRef)
const liItemsRef = document.querySelectorAll(".item")
console.log(`В списке ${liItemsRef.length} категории.`)

const categoriesArray = [...liItemsRef].map(
    categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`)
  .join("\n");
console.log(categoriesArray);

// const titleRef = document.querySelectorAll('h2');
// console.log(titleRef)
// const linkRef = document.querySelectorAll('li');
// console.log(linkRef)