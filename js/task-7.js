const inputDrager = document.querySelector('input');
const spanFontSize = document.querySelector('#text');
let fontSizeValue = inputDrager.value;
spanFontSize.style.fontSize = `${fontSizeValue}px`;

inputDrager.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.dir(event);
  let fontSizeValue = event.currentTarget.value;
  spanFontSize.style.fontSize = `${fontSizeValue}px`;
  console.log(spanFontSize.style.fontSize);
}