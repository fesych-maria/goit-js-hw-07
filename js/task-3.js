const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.classList.add("user-name-input");

inputName.addEventListener("input", (e) => {
  if (e.currentTarget.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = e.currentTarget.value.trim();
  }
});
