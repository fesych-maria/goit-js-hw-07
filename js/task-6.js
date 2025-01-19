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
controlsButtons.classList.add("controls-container");
createButton.classList.add("create-button");
destroyButton.classList.add("destroy-button");
boxContainer.classList.add("boxes-container");

createButton.addEventListener("click", () => onValidateNumber(createBoxes));

function onValidateNumber(callback) {
  const numberOfBoxes = +input.value;
  if (numberOfBoxes <= 100 && numberOfBoxes >= 1) {
    callback(numberOfBoxes);
  }
  input.value = "";
}

function createBox(size, fontSize) {
  return `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"><span class="box-text" style="font-size: ${fontSize}px;">${getRandomHexColor()}</span></div>`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    let size = 30 + i * 10;
    let fontSize = 6 + i * 2;
    boxes.push(createBox(size, fontSize));
  }
  const boxesArr = boxes.join("");
  boxContainer.innerHTML = boxesArr;
}

destroyButton.addEventListener("click", onDestroyButton);
function onDestroyButton() {
  boxContainer.innerHTML = "";
}
