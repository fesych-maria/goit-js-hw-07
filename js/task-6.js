function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsButtons = document.querySelector("#controls");
const input = controlsButtons.querySelector("input");
const createButton = controlsButtons.querySelector("[data-create]");
const destroyButton = controlsButtons.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => onValidateNumber(createBoxes));

function onValidateNumber(callback) {
  const numberOfBoxes = +input.value;
  if (numberOfBoxes <= 100 && numberOfBoxes >= 1) {
    callback(numberOfBoxes);
  }
  input.value = "";
}

function createBox(size) {
  return `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    boxes.push(createBox(size));
  }
  const boxesArr = boxes.join("");
  boxContainer.innerHTML = boxesArr;
}

destroyButton.addEventListener("click", onDestroyButton);
function onDestroyButton() {
  boxContainer.innerHTML = "";
}
