const spanRef = document.querySelector('span#text');
const sliderRef = document.querySelector("input#font-size-control");
const initialFontSize = parseInt(window.getComputedStyle(spanRef).fontSize);
const initialSliderValue = Number(sliderRef.value)
sliderRef.addEventListener("input", (event) => spanRef.style.fontSize = `${initialFontSize / initialSliderValue * event.currentTarget.value}px`);
