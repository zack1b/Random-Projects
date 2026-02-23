const displayText = document.getElementById("text");
const guessInput = document.getElementById("guess-input");
const guessButton = document.getElementById("guess-btn");

guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log("Enter");
    checkGuess();
  }
});

let attempts = 0;
let sercretNumber = Math.floor(Math.random() * 999) + 1;

console.log(`sercret number is: ${sercretNumber}`);

function checkGuess() {
  attempts++;
  displayText.style.color = "red";
  const value = guessInput.value || 0;

  if (value > sercretNumber) {
    console.log("Lower");
    displayText.innerText = `Lower then ${value}`;
  } else if (value < sercretNumber) {
    console.log("Higher");
    displayText.innerText = `Higher then ${value}`;
  } else if (value == sercretNumber) {
    console.log("Won");
    displayText.innerText = `🎉 You won in ${attempts} attempt.`;
    resetGame();
  }

  guessInput.value = "";
}

function resetGame() {
  console.log("reset game");
  displayText.style.color = "gainsboro";

  sercretNumber = Math.floor(Math.random() * 999) + 1;
  attempts = 0;
  console.log(`New sercret number is: ${sercretNumber}`);
}
