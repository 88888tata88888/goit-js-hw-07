const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listContainer = document.querySelector('#ingredients');
const insertListItems = items => {
  return items.map(element => {
    let unit = document.createElement(`li`);
    unit.textContent = element;
    return unit;
  });
};
const allUnits = insertListItems(ingredients);
listContainer.append(...allUnits); 
