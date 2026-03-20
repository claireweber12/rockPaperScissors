
function getComputerChoice(){
    let rand = Math.random()
    console.log(rand)
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

function getHumanChoice(){
    let choice = prompt("Choose Rock, Paper, or Scissors: ")
    return choice
}




function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Tie")
        return
    }
    if (humanChoice === "rock"){
        if(computerChoice === "paper"){
            console.log("You Lose...Paper covers rock.")
            computerScore += 1
            return
        }
        if(computerChoice === "scissors"){
            console.log("You win!...Rock beats scissors")
            humanScore += 1
            return
        }
    }
    if(humanChoice ==="paper"){
        if(computerChoice === "rock"){
            console.log("You Win!...Paper beats rock")
            humanScore += 1
            return
        }
        if(computerChoice === "scissors"){
            console.log("You Lose...Scissors cut paper.")
            computerScore += 1
            return
        }
    }
    else{
        if(computerChoice === "rock"){
            console.log("You lose...Rock beats scissors")
            computerScore += 1
            return
        }
        if(ComputerChoice === "paper"){
            console.log("You win!...Scissors cut paper!")
            humanScore += 1
            return
        }
    
    }
    
}

function playGame(){
    humanScore = 0;
    computerScore = 0;
    for (let i = 0; i < 5; i++){
        console.log("Round 1")
        playRound(getHumanChoice(), getComputerChoice())
        console.log("Your Score: " + humanScore)
        console.log("\n Computer Score: " + computerScore)
    }

    if (humanScore == computerScore){
        console.log("It's a tie!")
    }
    else if(humanScore > computerScore){
        console.log("You Win!")
    }
    else{
        console.log("You lose!")
    }

}

let humanScore = 0;
let ComputerScore = 0;
playGame()