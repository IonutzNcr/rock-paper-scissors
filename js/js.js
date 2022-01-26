
//**Computer randomly select between rock paper and scissors
function computerPlay(){
    let randomNumber = Math.floor(Math.random()*3)
    if (randomNumber == 0) return 'scissors'
    else if (randomNumber == 1) return 'rock'
    else return 'paper'
}
//play rock paper scissors
function game(){
    
    let playerScore=0;
    let computerScore=0;

    function singleRound(playerSelection,computerSelection=computerPlay()){
        playerSelection = this.textContent;
    
        if(playerSelection=="scissors"){
            if (computerSelection=="scissors"){
                displayWinner.textContent="Draw";
            } 
            else if (computerSelection=="rock") {
                computerScore += 1;
                displayWinner.textContent="You lose! Rock beats Scissors";
            }
            else{
                playerScore += 1;
                displayWinner.textContent="You win! Scissors beats Paper";
            } 
        }
        if(playerSelection=="paper"){
            if (computerSelection=="paper") displayWinner.textContent="Draw";
            else if (computerSelection=="scissors"){
                computerScore += 1;
                displayWinner.textContent= "You lose! Scissors beats paper" ;
            } 
            else {
                playerScore += 1;
                displayWinner.textContent= "You win! Paper beats Rock";
            }
        }
        if(playerSelection=="rock"){
            if (computerSelection=="rock") displayWinner.textContent="Draw" ;
            else if (computerSelection=="paper"){
                computerScore += 1;
                displayWinner.textContent="You lose! Paper beats rock";
            } 
            else {
                playerScore += 1;
                displayWinner.textContent= "You win! Rock beats Scissors";
            }
        }
        displayScore.textContent = `PLAYER 1: ${playerScore}   COMPUTER: ${computerScore} `;
        if(playerScore === 5 && computerScore < 5){
            displayScore.textContent = "Player has reach 5 pts and Won";
            
            playerScore = 0;
            computerScore = 0
            
        } 
        else if(computerScore == 5 && playerScore < 5){
            displayScore.textContent = "Computer Won";
            playerScore = 0;
            computerScore = 0
            
        } 
    }
    
    
    
       

    const paper = document.createElement("button");
    paper.textContent = "paper";
    const scissors = document.createElement("button");
    scissors.textContent = "scissors";
    const rock = document.createElement("button");
    rock.textContent = "rock";

    document.querySelector("body").appendChild(paper);
    document.querySelector("body").appendChild(scissors);
    document.querySelector("body").appendChild(rock);

    const scoreContainer = document.createElement("div");
    document.querySelector("body").appendChild(scoreContainer);

    const displayWinner = document.createElement("p");
    scoreContainer.appendChild(displayWinner);
    const displayScore = document.createElement("p");
    scoreContainer.appendChild(displayScore);

    paper.addEventListener("click",singleRound);
    scissors.addEventListener("click",singleRound);
    rock.addEventListener("click",singleRound);

}


game()
    



