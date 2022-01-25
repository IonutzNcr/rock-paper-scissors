
//**Computer randomly select between rock paper and scissors
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber == 0) return 'scissors'
    else if (randomNumber == 1) return 'rock'
    else return 'paper'
}

function game(){
    //**Create playerScore & computerScore
    let playerScore=0
    let computerScore=0

    function singleRound(playerSelection,computerSelection=computerPlay()){
    //**Ask the user to choose between rock paper scissors
        playerSelection = this.textContent
        console.log(playerSelection)
    //**Change player selection  string into lowerCase 
        playerSelection = playerSelection.toLowerCase()
        
        
    //**If player select  rock and computer scissor Display player won & playerScore +1
    //     Else if computer selected rock Display Draw
    //     Else if computer selected paper Display player loose & computerScore +1
    //**If player select paper and computer paper Display Draw
    //      Else if computer selected rock Display player Won & playerScore +1
    //      Else if computer selected scissors Display computer won & computerScore +1
    //**If player selected scissors and computer scissors Display draw
    //      Else if computer selected rock Display computer won & computerScore +1
    //      Else if computer selected paper Display player Won & playerScore +1
        if(playerSelection=="scissors"){
            if (computerSelection=="scissors"){
                playerScore += 1
                scoreContainer.textContent="Draw"
            } 
            else if (computerSelection=="rock") {
                computerScore += 1
                scoreContainer.textContent="You lose! Rock beats Scissors"
            }
            else{
                playerScore += 1
                scoreContainer.textContent="You win! Scissors beats Paper"
            } 
        }
        if(playerSelection=="paper"){
            if (computerSelection=="paper") scoreContainer.textContent="Draw"
            else if (computerSelection=="scissors"){
                computerScore += 1
                scoreContainer.textContent= "You lose! Scissors beats paper" 
            } 
            else {
                playerScore += 1
                scoreContainer.textContent= "You win! Paper beats Rock"
            }
        }
        if(playerSelection=="rock"){
            if (computerSelection=="rock") scoreContainer.textContent="Draw" 
            else if (computerSelection=="paper"){
                computerScore += 1
                scoreContainer.textContent="You lose! Paper beats rock"
            } 
            else {
                playerScore += 1
                scoreContainer.textContent= "You win! Rock beats Scissors"
            }
        }
        displayScore.textContent = `PLAYER 1: ${playerScore}   COMPUTER: ${computerScore} `
    }
    
    
    // console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
    

//**Display the winner at the end
//      If playerScore is higher than computerScore -> Player Won
//      Else if playerScore is lower than ComputerScore -> Computer Won
//      Else It's a draw

       // if(playerScore>computerScore) console.log("Player Won")
       // else if(playerScore<computerScore) console.log("Computer Won")
       // else console.log('It\'s a draw')

    const paper = document.createElement("button")
    paper.textContent = "paper"
    const scissors = document.createElement("button")
    scissors.textContent = "scissors"
    const rock = document.createElement("button")
    rock.textContent = "rock"

    document.querySelector("body").appendChild(paper)
    document.querySelector("body").appendChild(scissors)
    document.querySelector("body").appendChild(rock)

    paper.addEventListener("click",singleRound)
    scissors.addEventListener("click",singleRound)
    rock.addEventListener("click",singleRound)

    const scoreContainer = document.createElement("div")
    document.querySelector("body").appendChild(scoreContainer)

    const displayScore = document.createElement("p")
    scoreContainer.appendChild(displayScore)

}


game()
    



