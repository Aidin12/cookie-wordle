
const WORD = "PASTA"; // your custom 5-letter word, uppercase
const ROWS = 5;
const COLS = 5;
let currentRow = 0;
let currentCol = 0;
let isGameOver = false;

window.onload = () => {
  const grid = document.getElementById("grid");
  for (let r = 0; r < ROWS; r++) {
    const row = document.createElement("div");
    row.className = "row";
    for (let c = 0; c < COLS; c++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute("id", `cell-${r}-${c}`);
      row.appendChild(cell);
    }
    grid.appendChild(row);
  }
  initKeyboard();
  document.addEventListener("keydown", handleKey);
};

function initKeyboard() {
  const keys = [
    ["q","w","e","r","t","y","u","i","o","p"],
    ["a","s","d","f","g","h","j","k","l"],
    ["Enter","z","x","c","v","b","n","m","Backspace"]
  ];
  const keyboard = document.getElementById("keyboard");
  keys.forEach(rowKeys => {
    const rowDiv = document.createElement("div");
    rowDiv.className = "keyboard-row";
    rowKeys.forEach(key => {
      const keyBtn = document.createElement("button");
      keyBtn.textContent = key === "Backspace" ? "⌫" : key;
      keyBtn.className = "key";
      keyBtn.addEventListener("click", () => handleKey({ key }));
      rowDiv.appendChild(keyBtn);
    });
    keyboard.appendChild(rowDiv);
  });
}

function handleKey(event) {
  if (isGameOver) return;
  const key = event.key;
  if (key === "Backspace") {
    if (currentCol > 0) {
      currentCol--;
      updateCell("", currentRow, currentCol);
    }
  } else if (key === "Enter") {
    if (currentCol === COLS) checkRow();
  } else if (/^[a-zA-Z]$/.test(key)) {
    if (currentCol < COLS) {
      updateCell(key, currentRow, currentCol);
      currentCol++;
    }
  }
}

function updateCell(letter, row, col) {
  const cell = document.getElementById(`cell-${row}-${col}`);
  cell.textContent = letter.toUpperCase();
}

function checkRow() {
  const guess = [];
  for (let c = 0; c < COLS; c++) {
    guess.push(document.getElementById(`cell-${currentRow}-${c}`).textContent);
  }
  if (guess.includes("") || guess.length !== COLS) {
    showMessage("Fill all letters!", "orange");
    return;
  }
  const guessStr = guess.join("");
  const targetChars = WORD.split("");
  const colorStatuses = Array(COLS).fill("absent");
  
  // First pass: correct positions
  for (let i = 0; i < COLS; i++) {
    if (guess[i] === WORD[i]) {
      colorStatuses[i] = "correct";
      targetChars[i] = null;
    }
  }
  // Second pass: present but wrong position
  for (let i = 0; i < COLS; i++) {
    if (colorStatuses[i] === "absent" && WORD.includes(guess[i])) {
      const idx = targetChars.indexOf(guess[i]);
      if (idx > -1) {
        colorStatuses[i] = "present";
        targetChars[idx] = null;
      }
    }
  }
  // Apply colors
  for (let i = 0; i < COLS; i++) {
    const cell = document.getElementById(`cell-${currentRow}-${i}`);
    cell.classList.add(colorStatuses[i]);
  }
  if (guessStr === WORD) {
    gameWon();
  } else {
    currentRow++;
    currentCol = 0;
    if (currentRow === ROWS) gameOver();
  }
}

function gameWon() {
  isGameOver = true;
  showMessage(`🎁 You levelled up....here's the invitation to the start of your birthday adventure! 🛤️🎉🎁🎂Your girlfriend will meet you at Nottingham Train station, Tuesday 12th August 2025 🤍🩵🩷`, "pink");
}

function gameOver() {
  isGameOver = true;
  showMessage(`😢 Out of tries! The word was ${WORD}`, "red");
}

function showMessage(msg, color) {
  const msgDiv = document.getElementById("message");
  msgDiv.textContent = msg;
  msgDiv.style.color = color;

}
