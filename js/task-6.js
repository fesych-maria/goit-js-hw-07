function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsButtons = document.querySelector("#controls");
const input = controlsButtons.querySelector("input");
const createButton = controlsButtons.querySelector("[data-create]");
const boxContainer = document.querySelector("#boxes");

createButton.addEventListener("click", () => onValidateNumber(createBoxes));

function onValidateNumber(callback) {
  const numberOfBoxes = +input.value;
  if (numberOfBoxes <= 100 && numberOfBoxes >= 1) {
    callback(numberOfBoxes);
  }
}

const boxStyles = {
  width: 30,
  height: 30,
};

function createBox(boxStyles) {
  return `<div class="box" style="background-color: ${getRandomHexColor()}; width: ${
    boxStyles.width
  }px; height: ${boxStyles.height}px;"></div>`;
}

function createBoxes(amount) {
  const boxes = [];
  for (let i = 0; i < amount; i++) {
    boxes.push(createBox(boxStyles));
    boxStyles.width += 10;
    boxStyles.height += 10;
  }
  const boxesArr = boxes.join("");
  boxContainer.insertAdjacentHTML("beforeend", boxesArr);
}
