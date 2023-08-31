let timer = 60;
let score = 0;
let hitRn = 0;

const makeBubble = () => {
  let cluster = "";
  for (let i = 0; i <= 125; i++) {
    let rn = Math.floor(Math.random() * 10);
    cluster += `<div class="bubble">${rn}</div>`;
  }
  document.querySelector("#bottom-panel").innerHTML = cluster;
};

const setHit = () => {
  hitRn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitRn;
};

const timerFunc = () => {
  let myInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerVal").textContent = timer;
    } else {
      document.querySelector("#bottom-panel").innerHTML = `<h1>Game Over!</h1>`;
      clearInterval(myInterval);
    }
  }, 1000);
};

const setScore = () => {
  document.querySelector("#score").textContent = score;
};

const scoreIncrement = () => {
  score += 10;
  document.querySelector("#score").textContent = score;
};

const handleStart = () => {
  document.querySelector("#start").addEventListener("click", () => {
    console.log("start");
    location.reload();
  });
};

const setClick = () => {
  document.querySelector("#bottom-panel").addEventListener("click", (item) => {
    let selectBubble = Number(item.target.textContent);
    if (selectBubble === hitRn) {
      scoreIncrement();
      makeBubble();
      setHit();
    }
  });
};

setHit();
setClick();
setScore();
timerFunc();
makeBubble();
handleStart();
