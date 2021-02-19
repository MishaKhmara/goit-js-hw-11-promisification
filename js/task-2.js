const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsListRef = document.querySelector('#ingredients')
  const elements = ingredients.map(option =>{
    const ingredientsItemRef = document.createElement('li')
    ingredientsItemRef.textContent = option
    return ingredientsItemRef
  });
  
  ingredientsListRef.append(...elements)
  console.log(ingredientsListRef)
  