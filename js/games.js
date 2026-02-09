let number = Math.floor(Math.random() * 5) + 1;

function guess() {
  let g = Number(document.getElementById("guess").value);
  if (g === number) {
    alert("You won 🎉 Smile please Yashii 💙");
  } else {
    alert("Oops 😅 Try again");
  }
}
function mood() {
  const msgs = [
    "You are strong 💪",
    "Smile Yashii 💙",
    "You’re doing great 🌸",
    "Stress pogum, smile varum 😊",
    "Radiology queen 👩‍⚕️✨"
  ];
  alert(msgs[Math.floor(Math.random() * msgs.length)]);
}
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const player = "❌"; // Yashii
const ai = "⭕";     // Computer

function playerMove(index) {
  if (board[index] !== "" || gameOver) return;

  board[index] = player;
  render();

  if (checkWin(player)) {
    gameOver = true;
    heartShower();
    setTimeout(() => alert("Yashii wins 💙✨"), 300);
    return;
  }

  if (boardFull()) {
    gameOver = true;
    alert("Draw 😄");
    return;
  }

  setTimeout(aiMove, 400); // small delay feels human
}

function aiMove() {
  let empty = board
    .map((v, i) => v === "" ? i : null)
    .filter(v => v !== null);

  // simple smart AI: random move
  let move = empty[Math.floor(Math.random() * empty.length)];
  board[move] = ai;
  render();

  if (checkWin(ai)) {
    gameOver = true;
    alert("Computer wins 🤖");
  }
}

function render() {
  document.querySelectorAll(".board div")
    .forEach((cell, i) => cell.innerText = board[i]);

  document.getElementById("turnInfo").innerText =
    gameOver ? "Game Over 🎮" : "Your turn 💙";
}


function checkWin(symbol) {
  const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ];

  return winPatterns.some(p =>
    p.every(i => board[i] === symbol)
  );
}

function boardFull() {
  return board.every(c => c !== "");
}

function reset() {
  board = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  render();
}
function heartShower() {
  const count = window.innerWidth < 600 ? 20 : 40;

  for (let i = 0; i < count; i++) {
    const heart = document.createElement("div");
    heart.className = "win-heart";
    heart.innerText = "💙";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 20 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }
}




let clicks = 0;

function clickGame() {
  clicks++;
  document.getElementById("count").innerText = clicks;

  if (clicks === 10) {
    alert("Nice 😄 Keep going Yashii 💙");
  }
}


function relax() {
  alert("Take a deep breath 🌬️ You're doing great 💙");
}
