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

let gameInterval;

idcko.onclick = () => {
  idcko.style.display = "none";
  setPointOnclick(point);
  setGameInterval(point)
};

const moveElement = (element, x, y) => {
  element.style.top = y + "px";
  element.style.left = x + "px";
};

const setPointOnclick = (element) => {
  element.onclick = () => {
    element.innerText++;
    moveElement(element, getRandomNumber(0, 600), getRandomNumber(0, 600));
  };
};

const setGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(element, getRandomNumber(0, 600), getRandomNumber(0, 600));
  }, 600);
};

const getRandomNumber = (minimum, maximum) =>
  Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
