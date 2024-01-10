function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes() {
  const numberInput = parseInt(document.querySelector('input').value)
  const boxes = document.querySelector('#boxes')
  if (numberInput < 100 && numberInput > 0) {
    boxes.innerHTML = '';
  const boxSize = 30;
  for (let index = 0; index < numberInput; index++) {
    const box = document.createElement('div');
    box.style.width = `${boxSize}px`
    box.style.height = `${boxSize}px`
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box);
    boxSize += 10;
  }
  document.querySelector('input').value = '';
}
  }
  
function destroyBoxes() {
  const boxes = document.querySelector('#boxes')
  boxes.innerHTML = '';
}