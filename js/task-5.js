function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const randomColor = document.querySelector('.change-color').addEventListener('click',function (event) {
  const colorBody = document.querySelector('body');
  colorBody.style.backgroundColor = getRandomHexColor();
  const colorSpan = document.querySelector('.color');
  colorSpan.textContent = colorBody.style.backgroundColor
})