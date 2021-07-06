const inputEl = document.querySelector('#name-input');
const stringNameEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(stringNameEl);

inputEl.addEventListener('input', onInputChange);

function onInputChange(event) {
  if (event.currentTarget.value) {
    stringNameEl.textContent = event.currentTarget.value;
  } else {
    stringNameEl.textContent = 'незнакомец';
  }
}  
