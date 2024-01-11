function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const createBtn = document.querySelector('button[data-create]');
createBtn.addEventListener('click', createBoxes);
const destroyBtn = document.querySelector('button[data-destroy]');
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  
  const numberInput = parseInt(document.querySelector('input').value);
  if (numberInput < 100 && numberInput > 0) {
    boxes.innerHTML = '';
  let boxSize = 30;
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
  boxes.innerHTML = '';
}