function setAlarm(alarmTime) {
  document.getElementById('timeRemaining').innerHTML = message(alarmTime);
  countdown(alarmTime);
}
function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  if (min === 0 && sec % 2 == 0 && sec < 10) {
    document.body.style.backgroundColor = 'var(--bg-alarm-red)';
  } else if (min === 0 && sec % 2 != 0 && sec < 10) {
    document.body.style.backgroundColor = 'var(--bg-alarm-or)';
  }
  return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
  function message(alarmTime) {
    return "How long can you focus: " + formatTime(alarmTime);
}
let interval = 0;
function countdown(alarmTime) {
  if (interval !== 0) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    alarmTime--;
    setAlarm(alarmTime);
    if (alarmTime <= 0) {
      clearInterval(interval);
      playAlarm();
    }
  }, 1000);
}
    
  // DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    if (document.getElementById('alarmSet').value > 0) {
      setAlarm(document.getElementById('alarmSet').value);
    }
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    if (interval !== 0) {
      clearInterval(interval);
      interval = 0;
    }
    document.getElementById('alarmSet').value = 0;
    document.getElementById('timeRemaining').innerHTML = "How long can you focus: 00:00";
    document.body.style.backgroundColor = 'var(--bg-color)';
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
