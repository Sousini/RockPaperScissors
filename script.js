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



        
        const getHumanChoice = function() {
            let answer = prompt("Choose rock, paper or scissors");
            return answer;
        };


        let humanScore = 0;
        let computerScore = 0;

        function playRound(humanChoice, computerChoice) {
            if(humanChoice === computerChoice) {
                console.log("draw");
            } else if (humanChoice === "rock") {
                if(computerChoice === "paper") {
                    computerScore += 1;
                    console.log("PC wins");

                } else if(computerChoice === "scissors") {
                    humanScore += 1;
                    console.log("Human wins");
                }
            } else if (humanChoice === "paper") {
                if(computerChoice === "scissors") {
                    computerScore += 1;
                    console.log("PC wins");
                    
                } else if(computerChoice === "rock") {
                    humanScore += 1;
                    console.log("Human wins");
                }
            } else if (humanChoice === "scissors") {
                if(computerChoice === "rock") {
                    computerScore += 1;
                    console.log("PC wins");
                } else if(computerChoice === "paper") {
                    humanScore += 1;
                    console.log("Human wins");
                }
            }

            return 0;
        };


        
        
        
        
        function playGame(rounds) {
            
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


        playGame(5);