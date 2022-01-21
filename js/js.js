
//**Computer randomly select between rock paper and scissors
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber == 0) return 'scissors'
    else if (randomNumber == 1) return 'rock'
    else return 'paper'
}

//**Player select between rock paper and scissor
//**Change player selection  string into lowerCase 
//**If player select  rock and computer scissor Display player won
//     Else if computer selected rock Display Draw
//     Else if computer selected paper Display player loose
//**If player select paper and computer paper Display Draw
//      Else if computer selected rock Display player Won
//      Else if computer selected scissors Display computer won
//**If player selected scissors and computer scissors Display draw
//      Else if computer selected rock Display computer won
//      Else if computer selected paper Display player Won


function singleRound(playerSelection,computerSelection=computerPlay()){
    
    playerSelection = playerSelection.toLowerCase()

    if(playerSelection=="scissors"){
        console.log(computerSelection)
        if (computerSelection=="scissors") return "Draw"
        else if (computerSelection=="rock") return "You lose! Rock beats Scissors"
        else return "You win! Scissors beats Paper"
    }
    if(playerSelection=="paper"){
        if (computerSelection=="paper") return "Draw"
        else if (computerSelection=="scissors") return "You lose! Scissors beats paper"
        else return "You win! Paper beats Rock"
    }
    if(playerSelection=="rock"){
        if (computerSelection=="rock") return "Draw"
        else if (computerSelection=="paper") return "You lose! Paper beats rock"
        else return "You win! Rock beats Scissors"
    }
}

console.log(singleRound("ROCK"))
    



