const box = document.querySelector(".box");

const boxText = (num) => {
  box.innerText = num;
};

var i = 0;

const timer = setInterval(function () {
  i++;
  i == 5 ? (boxText(i), clearInterval(timer)) : boxText(i);
}, 1000);
