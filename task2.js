let timer;
let elapsedSeconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const laps = document.getElementById('laps');

document.getElementById('start').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedSeconds++;
      updateDisplay();
    }, 1000);
  }
});

document.getElementById('pause').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
});

document.getElementById('reset').addEventListener('click', () => {
  isRunning = false;
  clearInterval(timer);
  elapsedSeconds = 0;
  updateDisplay();
  laps.innerHTML = ''; // Clear lap times
});

document.getElementById('lap').addEventListener('click', () => {
  if (isRunning) {
    const lapTime = formatTime(elapsedSeconds);
    const li = document.createElement('li');
    li.textContent = lapTime;
    laps.appendChild(li);
  }
});

function updateDisplay() {
  display.textContent = formatTime(elapsedSeconds);
}

function formatTime(seconds) {
  const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}
