/*
// params - parametry
function tomas(item, item2) {
    console.log("nesu: " + item + "," + item2);
}
//args - argumenty
tomas("mys", "budovu");
tomas("notebook", "kyblíček")

const ttomas = (item, item2) => {
    console.log(`nesu:${item}; ${item2}`);
}

tomas("mys", "budovu");
tomas("notebook", "kyblíček") 

function play(song, reznik){
console.log(`playing: ${song} by ${reznik}`)
}

const playMusic = (song, reznik) => {
    console.log(`playing: ${song} by ${reznik}`)
}

play("Zasrany vanoce", "reznik" )
play("Take me home", "John Denver" ) */

const point = document.getElementById("point");
const idcko = document.getElementById("idcko");
const showtime = document.getElementById("showtime");

let gameInterval;
let gameIntervalSpeed = 700;
let gameStart;

idcko.onclick = () => {
  idcko.style.display = "none";
  setPointOnclick(point);
  setGameInterval(point);
  gameStart = performance.now();
};

const moveElement = (element, x, y) => {
  element.style.top = y + "px";
  element.style.left = x + "px";
};

const setPointOnclick = (element) => {
  element.onclick = () => {
    let gameEnd = performance.now();
    let time = gameEnd - gameIntervalSpeed;
    time= Math.floor(time);
    showtime.innerText =`Time: ${time}ms`
    gameStart = gameEnd;
    element.innerText++;
    gameIntervalSpeed -= 10;
    if (gameInterval > 200) setGameInterval(element);
    moveElement(
      element,
      getRandomNumber(0, window.innerWidth - 65),
      getRandomNumber(0, window.innerHeight - 65)
    );
  };
};

const setGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(
      element,
      getRandomNumber(0, window.innerWidth - 65),
      getRandomNumber(0, window.innerHeight - 65)
    );
  }, gameIntervalSpeed);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

