let [milliseconds, seconds, minutes] = [0, 0, 0];
const timer = document.querySelector(".stopwatch");
let interval;

document.addEventListener("click", (e) => {
  const ButtonEl = e.target;

  if (ButtonEl.id === "start") {
    clearInterval(interval);

    interval = setInterval(startTime, 10);
  }
  if (ButtonEl.id === "pause") {
    pause();
  }
  if (ButtonEl.id === "reset") {
    reset();
  }
});

function startTime() {
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
  }
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timer.innerHTML = `${m} : ${s} : ${ms}`;
}

function pause() {
  clearInterval(interval);
}

function reset() {
  clearInterval(interval);
  [milliseconds, seconds, minutes] = [0, 0, 0];
  timer.innerHTML = "00:00:00";
}
