
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
        playerSelection = prompt("Choose between rock paper and scissors")
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
                playerScore += 0
                computerScore += 0
                console.log("Draw") 
            } 
            else if (computerSelection=="rock") {
                playerScore += 0
                computerScore += 1
                console.log("You lose! Rock beats Scissors")
            }
            else{
                playerScore += 1
                computerScore += 0
                console.log("You win! Scissors beats Paper")
            } 
        }
        if(playerSelection=="paper"){
            if (computerSelection=="paper") console.log("Draw")
            else if (computerSelection=="scissors"){
                playerScore += 0
                computerScore += 1
                console.log("You lose! Scissors beats paper") 
            } 
            else {
                playerScore += 1
                computerScore += 0
                console.log("You win! Paper beats Rock") 
            }
        }
        if(playerSelection=="rock"){
            if (computerSelection=="rock") console.log("Draw") 
            else if (computerSelection=="paper"){
                playerScore += 0
                computerScore += 1
                console.log("You lose! Paper beats rock") 
            } 
            else {
                playerScore += 1
                computerScore += 0
                console.log("You win! Rock beats Scissors") 
        }
        }
    }
    //**Repeat the If process 5 times.
    //**Display the outcome each time
    singleRound()
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
    singleRound()
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
    singleRound()
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
    singleRound()
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} pt`)
    singleRound()
    console.log(`Player has ${playerScore} pt and Computer has ${computerScore} rpt`)

//**Display the winner at the end
//      If playerScore is higher than computerScore -> Player Won
//      Else if playerScore is lower than ComputerScore -> Computer Won
//      Else It's a draw

    if(playerScore>computerScore) console.log("Player Won")
    else if(playerScore<computerScore) console.log("Computer Won")
    else console.log('It\'s a draw')
}

game()
    



