<div align="center">

# ✊✋✌️ Rock Paper Scissors

A classic **Rock, Paper, Scissors** game played against the computer, written in **vanilla JavaScript**.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Status](https://img.shields.io/badge/status-completed-brightgreen?style=for-the-badge)

</div>

---

## ✨ Features

- 🤖 The computer picks **rock, paper or scissors** at random
- 🙋 The player types their choice in a prompt (**case-insensitive**: `rock`, `ROCK`, `RocK`...)
- 🏆 Every round announces the winner, e.g. *"You lose! Paper beats Rock"*
- 🔢 Keeps track of the **human and computer scores**
- 🎮 A full game is **5 rounds**, with the overall winner declared at the end

---

## 📁 Project structure

```
RockPaperScissors/
├── index.html    # Loads the script
├── script.js     # Game logic
└── README.md
```

---

## 🚀 How to run

No installation or build step needed.

```bash
# Clone the repository
git clone https://github.com/Sousini/RockPaperScissors.git
cd RockPaperScissors

# Open index.html in your browser
```

Then open the **browser developer console** (`F12` → *Console*) to see the results of each round and the final score.

---

## 🎮 How to play

1. Open `index.html` in your browser.
2. Type `rock`, `paper` or `scissors` in each prompt.
3. Check the console to see who won each round.
4. After 5 rounds, the winner of the game is announced.

---

## 🧠 How it works

| Function | What it does |
| :------- | :----------- |
| `getComputerChoice()` | Uses `Math.random()` to randomly return `"rock"`, `"paper"` or `"scissors"` |
| `getHumanChoice()` | Uses `prompt()` to get the player's choice |
| `playRound(humanChoice, computerChoice)` | Plays one round, logs the winner and updates the score |
| `playGame()` | Plays 5 rounds, keeps the scores and declares the winner |

---

## 🛠️ Built with

- **HTML5**
- **JavaScript (ES6)**

---

## 🎯 What I learned

- Writing and testing small, focused functions
- Generating random values with `Math.random()`
- Getting user input with `prompt()` and logging with `console.log()`
- Conditionals and keeping state with variables

---

## 🔮 Possible improvements

- [ ] Add a UI with buttons instead of prompts
- [ ] Display the scores and results on the page
- [ ] Style the game with CSS
- [ ] Handle invalid inputs

---

## 👤 Author

**João Sousa**

[![GitHub](https://img.shields.io/badge/GitHub-Sousini-181717?style=for-the-badge&logo=github)](https://github.com/Sousini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jo%C3%A3o-sousa-63ab4537a/)
