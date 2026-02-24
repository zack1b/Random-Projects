const randomColorButton = document.getElementById("rc-btn");

randomColorButton.addEventListener("click", makeNewColor);

//const randomRGB = () => {
//  const r = Math.floor(Math.random() * 255);
//  const g = Math.floor(Math.random() * 255);
//  const b = Math.floor(Math.random() * 255);
//  return `rgb(${r}, ${g}, ${b})`;
//};

const randomHex = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, "0")}`;
};

function makeNewColor() {
  const newColor = randomHex();
  console.log(newColor);
  randomColorButton.style.background = newColor;
  randomColorButton.textContent = newColor;
}
