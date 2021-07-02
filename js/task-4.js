const counterValueEl = document.querySelector('#value');

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementFunction = () =>
  (counterValueEl.textContent = Number(counterValueEl.textContent) + 1);
const decrementFunction = () =>
  (counterValueEl.textContent = Number(counterValueEl.textContent) - 1);
decrementBtn.addEventListener('click', decrementFunction);
incrementBtn.addEventListener('click', incrementFunction); 