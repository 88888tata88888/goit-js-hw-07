const inputFieldEl = document.querySelector('input');

inputFieldEl.addEventListener('blur', validationHandler);

function validationHandler(event) {
  const inputDataLength = Number(inputFieldEl.getAttribute('data-length'));

  if (event.currentTarget.value.length === inputDataLength) {
    inputFieldEl.classList.add('valid');
    inputFieldEl.classList.remove('invalid');
  } else {
    inputFieldEl.classList.remove('valid');
    inputFieldEl.classList.add('invalid');
  }
} 