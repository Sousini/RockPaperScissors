const options = [];
options.push ("rock", "paper", "scissors");

// const options = ["rock", "paper", "scissors"]


const getRandomInt = function(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
};

const getComputerChoice = function() {
    let random = getRandomInt(0,3);
    return options[random];
};



        
/*const getHumanChoice = function() {
    let answer = prompt("Choose rock, paper or scissors");
    return answer;
};*/


let humanScore = 0;
let computerScore = 0;
let gameActive = true;

function playRound(humanChoice, computerChoice) {
    if(!gameActive) {
        return;
    }
    if(humanChoice === computerChoice) {
        roundW.textContent = "Draw";
    } else if (humanChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore += 1;
            roundWUpdate("PC");

        } else if(computerChoice === "scissors") {
            humanScore += 1;
            roundWUpdate("Human");
        }
    } else if (humanChoice === "paper") {
        if(computerChoice === "scissors") {
            computerScore += 1;
            roundWUpdate("PC");
            
        } else if(computerChoice === "rock") {
            humanScore += 1;
            roundWUpdate("Human");
        }
    } else if (humanChoice === "scissors") {
        if(computerChoice === "rock") {
            computerScore += 1;
            roundWUpdate("PC");
        } else if(computerChoice === "paper") {
            humanScore += 1;
            roundWUpdate("Human");
        }
    }

    return 0;
};


        
        
        
/*function playGame(rounds) {
    
    for(let i = 1; i <= rounds; i++) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        console.log(humanSelection);
        console.log(computerSelection);

        playRound(humanSelection, computerSelection);

        console.log("human: "+ humanScore);
        console.log("computer: "+ computerScore);
    }

    if(humanScore > computerScore) {
        console.log("Human is the WINNER");
    } else if(computerScore > humanScore) {
        console.log("PC is the WINNER");
    } else {
        console.log("DRAW");
    }

    return 0;
};


playGame(5);*/
        




const container = document.querySelector("#container");

const div = document.createElement("div");
const h2 = document.createElement("h2");
h2.textContent = "Results";
div.appendChild(h2);

const humanScorep = document.createElement("p");
div.appendChild(humanScorep);


const computerScorep = document.createElement("p");
div.appendChild(computerScorep);

const roundW = document.createElement("p");
div.appendChild(roundW);

const winner = document.createElement("h3");
div.appendChild(winner);

const btnRestart = document.createElement("button");
btnRestart.textContent = "RESTART";
div.appendChild(btnRestart);

container.appendChild(div);


function updateUI() {
    btnRestart.style.display = "none";
    humanScorep.textContent = "Human Score: "+ humanScore;
    computerScorep.textContent = "Computer Score: "+ computerScore;
    winner.textContent = numberWins(5);
};

updateUI();

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    
    button.addEventListener("click", () => {
        if(!gameActive) return;
        let humanChoice = button.id;
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        updateUI();
    });
});


function roundWUpdate(name) {
    roundW.style.display = "block";
    roundW.textContent = name + " wins the round!";
}



function restart() {
    btnRestart.style.display = "block";

    btnRestart.addEventListener("click", () => {
        humanScore = 0;
        computerScore = 0;
        gameActive = true;
        roundW.style.display = "none";
        updateUI();
    })
}


function numberWins(wins) {
    if(humanScore == wins) {
        gameActive = false;
        restart();
        return "Human is the WINNER!";
    } 

    if(computerScore == wins) {
        gameActive = false;
        restart();
        return "Computer is the WINNER!";
    }

}