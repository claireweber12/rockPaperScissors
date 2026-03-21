
function getComputerChoice(){
    let rand = Math.random()
    if (rand < 0.33){
        return("rock")
    }
    else if(rand < 0.66){
        return("paper")
    }
    else{
        return("scissors")
    }
}



function playRound(humanChoice, computerChoice){
    const div = document.querySelector(".results")
    const results = document.createElement("p")
    if (humanChoice === computerChoice){
        results.textContent = "Tie"
        div.appendChild(results)
        return
    }
    if (humanChoice === "rock"){
        if(computerChoice === "paper"){
            results.textContent = "You Lose...Paper covers rock."
            div.appendChild(results);
            computerScore += 1
            return
        }
        if(computerChoice === "scissors"){
            results.textContent = "You win!...Rock beats scissors."
            div.appendChild(results);
            humanScore += 1
            return
        }
    }
    if(humanChoice ==="paper"){
        if(computerChoice === "rock"){
            results.textContent = "You win!...Paper covers rock."
            div.appendChild(results);
            humanScore += 1
            return
        }
        if(computerChoice === "scissors"){
            results.textContent = "You Lose...Scissors cut paper."
            div.appendChild(results);
            computerScore += 1
            return
        }
    }
    else{
        if(computerChoice === "rock"){
            results.textContent = "You lose...Rock beats scissors"
            div.appendChild(results);
            computerScore += 1
            return
        }
        if(computerChoice === "paper"){
            results.textContent = "You win!...Scissors cut paper!"
            div.appendChild(results);
            humanScore += 1
            return
        }
    
    }
    
}

function playGame(humanChoice){
    
    const div = document.querySelector(".results");
    const playerScore = document.createElement("p")
    const compScore = document.createElement("p")

    playRound(humanChoice, getComputerChoice())
    playerScore.textContent = "Your Score: " + humanScore;
    compScore.textContent = "\n Computer Score: " + computerScore;
    div.appendChild(playerScore)
    div.appendChild(compScore);
    
    if(computerScore ==5 || humanScore == 5){
        const finalScore = document.createElement("p")
        if (humanScore == computerScore){
            finalScore.textContent = "It's a Tie! Game Over"
            div.appendChild(finalScore)
        }
        else if(humanScore > computerScore){
            finalScore.textContent = "You Win! Game Over";
            div.appendChild(finalScore);
        }
        else{
            finalScore.textContent = "You Lose! Game Over"
            div.appendChild(finalScore)
        }
        humanScore = 0;
        computerScore = 0;
        return
    }

}

function startGame(){
    const rockBtn = document.querySelector("#rock-btn");
    rockBtn.addEventListener("click", chooseRock);
    const paperBtn = document.querySelector("#paper-btn");
    paperBtn.addEventListener("click", choosePaper);
    const scissorsBtn = document.querySelector("#scissors-btn");
    scissorsBtn.addEventListener("click", chooseScissors);
}



function chooseRock(){
    playGame("rock");
}
function choosePaper(){
    playGame("paper");
}
function chooseScissors(){
    playGame("scissors");
}

let humanScore = 0;
let computerScore = 0;
startGame()

