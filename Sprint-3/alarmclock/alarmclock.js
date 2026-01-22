function setAlarm(alarmTime) {
    document.getElementById('timeRemaining').innerHTML = message(alarmTime);
}
function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }
  function message(time) {
    return "Time Remaining: " + formatTime(time);
  }
  

  function countdown(alarmTime) {
    let interval = setInterval(() => {
      alarmTime--;
      document.getElementById('timeRemaining').innerHTML = message(alarmTime);
      if (alarmTime == 0) {
        clearInterval(interval);
        playAlarm();
      }
    }, 1000);
  }
    
  // DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm(document.getElementById('alarmSet').value);
    countdown(document.getElementById('alarmSet').value);
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
    document.getElementById('alarmSet').value = 0;
    document.getElementById('timeRemaining').innerHTML = "Time Remaining: 0:00";
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
