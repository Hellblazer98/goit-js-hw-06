function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const btn = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

btn.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  colorText.textContent = document.body.style.backgroundColor;
}