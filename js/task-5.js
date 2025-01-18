function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector(".change-color");
const body = document.querySelector("body");
const textColor = document.querySelector(".color");
buttonChangeColor.addEventListener("click", onButtonClick);
function onButtonClick(e) {
  const resultRandomColor = getRandomHexColor();
  body.style.backgroundColor = resultRandomColor;
  textColor.textContent = resultRandomColor;
}
