function askage() {
  var year = prompt("Enter your age:");
  var ageindays = (2020 - year) * 365;
  var h1 = document.createElement("h1");
  var ans = document.createTextNode("You are " + ageindays + " old");
  h1.setAttribute("id", "ageindays");
  h1.appendChild(ans);
  document.getElementById("flex-box-result").appendChild(h1);
  //console.log(ageindays);
}

function reset() {
  document.getElementById("ageindays").remove();
}

//CHALENGE 3
function rpsgame(yc) {
  console.log(yc);
  var hc, bc;
  hc = yc.id;
  bc = numtochoice(randomgen());
  console.log("CC:", bc);
  console.log("HC:", hc);

  var result = winner(hc, bc);
  console.log(result);
  var answer = message(result);
  console.log(answer);
  rpsfrontend(yc.id, bc, message);
}

function randomgen() {
  return Math.floor(Math.random() * 3);
}

function numtochoice(number) {
  return ["rock", "paper", "scissor"][number];
}

function winner(yc, cc) {
  var database = {
    rock: { scissor: "1", rock: "0.5", paper: "0" },
    paper: { rock: "1", paper: "0.5", scissor: "0" },
    scissor: { paper: "1", scissor: "0.5", rock: "0" },
  };
  var yourscore = database[yc][cc];
  var computerscore = database[cc][yc];

  return [yourscore, computerscore];
}

function message([yourscore, computerscore]) {
  if (yourscore == 0) {
    return { message: "YOU LOST", color: "red" };
  } else if (yourscore == 0.5) {
    return { message: "GAME DRAWN", color: "yellow" };
  } else {
    return { message: "YOU WON", color: "green" };
  }
}

function rpsfrontend(humanimage, botimage, message) {
  var imgdata = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissor: document.getElementById("scissor").src,
  };

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissor").remove();

  var humandiv = document.createElement("div");
  var botdiv = document.createElement("div");
  var messagediv = document.createElement("div");

  humandiv.innerHTML =
    "<img src='" +
    imgdata[humanimage] +
    "'height=150 width=150 style='box:shadow: 0px 10px 50px rgba(37,50,233,1);'>";

  botdiv.innerHTML =
    "<img src='" +
    imgdata[botimage] +
    "'height=150 width=150 style='box:shadow: 0px 10px 50px rgba(243,38,24,1);'>";

  messagediv.innerHTML =
    "<h1 style='color:" +
    message["color"] +
    ";font-size:60px; padding:30px; '>" +
    message["message"] +
    "</h1>";

  document.getElementById("flex-rps-id").appendChild(humandiv);
  document.getElementById("flex-rps-id").appendChild(messagediv);
  document.getElementById("flex-rps-id").appendChild(botdiv);
}

var all_buttons = document.getElementsByTagName("button");
console.log(all_buttons);

var copybuttons = [];

for (let i = 0; i < all_buttons.length; i++) {
  copybuttons.push(all_buttons[i].classList[1]);
}
console.log(copybuttons);

function buttoncolorchange(choice) {
  if (choice.value === "red") buttonred();
  else if (choice.value === "green") buttongreen();
  else if (choice.value === "reset") buttonreset();
  else if (choice.value === "random") buttonrandom();
}

function buttonred() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-danger");
  }
}

function buttongreen() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add("btn-success");
  }
}
function buttonreset() {
  for (let i = 0; i < all_buttons.length; i++) {
    all_buttons[i].classList.remove(all_buttons[i].classList[1]);
    all_buttons[i].classList.add(copybuttons[i]);
  }
}

function buttonrandom() {
  let color = ["btn-success", "btn-danger", "btn-warning", "btn-primary"];

  for (let i = 0; i < all_buttons.length; i++) {
    let element = Math.floor(Math.random() * 4);
    all_buttons[i].classList.remove(all_buttons[i].classList[i]);
    all_buttons[i].classList.add(color[element]);
  }
}

//CHALLENGE 4
let blackjackgame = {
  you: { scorespan: "#your-result", div: "#your-box", score: "0" },
  dealer: { scorespan: "#dealer-result", div: "#dealer-box", score: "0" },
  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "J", "K", "Q", "A"],
  cardsmap: {
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    J: "10",
    K: "10",
    Q: "10",
    A: ["1", "11"],
  },
};
function randomcard() {
  let randomnum = Math.floor(13 * Math.random());
  return blackjackgame["cards"][randomnum];
}

const YOU = blackjackgame["you"];
const DEALER = blackjackgame["dealer"];

document.querySelector("#hit").addEventListener("click", blackjackhit);
const hitsound = new Audio("static/sounds/swish.m4a");
const dealsound = new Audio("static/sounds/cash.mp3");
const standsound = new Audio("static/sounds/aww.mp3");

function blackjackhit() {
  let card = randomcard();
  //console.log(card);
  showcard(card, YOU);
  updatescore(card, YOU);
  showscore(YOU);
  console.log(YOU["score"]);
}
document.querySelector("#deal").addEventListener("click", blackjackdeal);

function showcard(card, activeplayer) {
  let cardimage = document.createElement("img");
  cardimage.src = `static/images/${card}.png`;
  document.querySelector(activeplayer["div"]).appendChild(cardimage);
  hitsound.play();
  //cardimage.src = 'static/images/${"' + card + '"}.png';
}

function blackjackdeal() {
  let yourimages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerimages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");
  console.log(yourimages);
  for (let i = 0; i < yourimages.length; i++) {
    yourimages[i].remove();
  }
  for (let i = 0; i < dealerimages.length; i++) {
    dealerimages[i].remove();
  }
}

function updatescore(card, activeplayer) {
  if (card === "A") {
    if (
      parseInt(activeplayer["score"]) +
        parseInt(blackjackgame["cardsmap"][card][1]) <=
      21
    ) {
      activepalyer["score"] +=
        parseInt(activeplayer["score"]) +
        parseInt(blackjackgame["cardsmap"][card][1]);
    } else {
      activepalyer["score"] +=
        parseInt(activeplayer["score"]) +
        parseInt(blackjackgame["cardsmap"][card][0]);
    }
  } else {
    activeplayer["score"] =
      parseInt(activeplayer["score"]) +
      parseInt(blackjackgame["cardsmap"][card]);
  }
}

function showscore(activeplayer) {
  document.querySelector(activeplayer["scorespan"]).textContent =
    activeplayer["score"];
}
