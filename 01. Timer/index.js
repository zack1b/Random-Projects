// Get the HTML elements into js
const displayTimer = document.getElementById("display-timer");
const startButton = document.getElementById("start-btn");
const pauseButton = document.getElementById("pause-btn");
const resetButton = document.getElementById("reset-btn");

let time = 0; //timer time
let heartbeat; //handles to control the timer

let isPlaying = false;
//event listeners

startButton.addEventListener("click", startTimer);
pauseButton.addEventListener("click", pauseTimer);
resetButton.addEventListener("click", resetTimer);

//fotmat the timer 00:00:00
function updateDisplay() {
  //calc hrs min sec
  let hrs = Math.floor(time / 3600);
  let mins = Math.floor((time % 3600) / 60);
  let secs = time % 60;

  //add 0 to the start of a digit
  let h = String(hrs).padStart(2, "0");
  let m = String(mins).padStart(2, "0");
  let s = String(secs).padStart(2, "0");

  displayTimer.innerText = `${h}:${m}:${s}`;
}

//start the timer
function startTimer() {
  clearInterval(heartbeat);
  heartbeat = setInterval(function () {
    time++;
    updateDisplay();
  }, 1000);

  pauseButton.textContent = "Pause";
  isPlaying = true;
  startButton.classList.remove("active");
  pauseButton.classList.add("active");
  resetButton.classList.add("active");
}

//pause the timer
function pauseTimer() {
  if (isPlaying) {
    clearInterval(heartbeat);
    pauseButton.textContent = "Continue";
    isPlaying = false;
  } else {
    startTimer();
    pauseButton.textContent = "Pause";
    isPlaying = true;
  }
}

//resets the timer
function resetTimer() {
  clearInterval(heartbeat);
  time = 0;
  updateDisplay();

  startButton.classList.add("active");
  pauseButton.classList.remove("active");
  resetButton.classList.remove("active");
}
