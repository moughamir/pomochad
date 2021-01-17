const box = document.querySelector(".box");

// timer divided into two blocks : secs and mins
var pomoMin = 25;
var pomoSec = 60;

// displays the initial output for the timer
box.innerText = `${pomoMin} : ${pomoSec}`;

const boxText = (min, sec) => {
  box.innerText = `${min} : ${sec}`;
};

const startPomodoro = () => {
  const timer = setInterval(function () {
    if (pomoMin == 0) clearInterval(timer);

    pomoSec--;
    pomoSec == 0
      ? (boxText(pomoMin, pomoSec), (pomoSec = 60), pomoMin--)
      : boxText(pomoMin, pomoSec);
  }, 1000);
};

//startPomodoro();
//
timerSound = () => {
  var audio = new Audio(".../assets/cocGame.mp3");
  audio.play();
};
