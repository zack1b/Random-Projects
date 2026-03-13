const coinflipButton = document.getElementById("coinflip");

coinflipButton.addEventListener("click", coinFlip);

function resetButton() {
  console.log("reseted button");
}

function coinFlip() {
  let randomNumber;
  randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 0) {
    console.log("Heads");
    coinflipButton.innerText = "Heads";
    coinflipButton.style.backgroundColor = "rgb(35, 191, 234)";
  } else {
    console.log("Tails");
    coinflipButton.innerText = "Tails";
    coinflipButton.style.backgroundColor = "rgb(52, 234, 35)";
  }
}
