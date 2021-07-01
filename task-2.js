/*const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listContainer = document.querySelector('ul#ingredients');
  const insertListItems = items => {
      const unit = document.createElement('li');
      unit.textContent = items;
      return unit;
  };

  const allUnits = ingredients.map(items => insertListItems(items));
  listContainer.append(...allUnits); */

  const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listContainer = document.querySelector('ul#ingredients');
  const insertListItems = items => {
    let array = [];
    ingredients.forEach(element => {
      let unit = document.createElement('li');
      unit.textContent = element;
      array.push(unit);
      console.log(unit);
    });
     console.log(array.join(''));

      return array;
  };

  const allUnits = insertListItems(ingredients);
  listContainer.insertAdjacentHTML('afterbegin', ...allUnits);