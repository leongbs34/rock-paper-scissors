function computerPlay(){
    let result; 
    let resultNo = Math.floor((Math.random()*3) + 1);
    if(resultNo == 1){ result = 'rock'}
    else if(resultNo == 2){ result = 'paper'}
    else {result = 'scissors'}
    return result;
}

function playRound(playerSelection, computerSelection = computerPlay()){
    let result;
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == computerSelection){ result = 0} //Draw
    else if((playerSelection == 'rock') && (computerSelection == 'paper')){ result = 1} 
    else if((playerSelection == 'rock') && (computerSelection == 'scissors')){ result = 2} 
    else if((playerSelection == 'paper') && (computerSelection == 'rock')){ result = 3} 
    else if((playerSelection == 'paper') && (computerSelection == 'scissors')){ result = 4} 
    else if((playerSelection == 'scissors') && (computerSelection == 'rock')){ result = 5} 
    else if((playerSelection == 'scissors') && (computerSelection == 'paper')){ result = 6} 
    return result;
}

function game(){
    let score = 0 , 
        scoreComputer = 0;
    for(let i = 1; i<=rounds; i++){
        console.log('Round ' + i);
        let playerSelection = prompt('Type in rock, paper or scissors');
        let match = playRound(playerSelection);
        if(match == 0){
            console.log('Draw!');
        }
        else if(match == 1){
            console.log('You Lose! Paper beats Rock');
            scoreComputer++;
        }
        else if(match == 2){
            console.log('You Win! Rock beats Scissors');
            score++;
        }
        else if(match == 3){
            console.log('You Win! Paper beats Rock');
            score++;
        }
        else if(match == 4){
            console.log('You Lose! Scissors beats Paper');
            scoreComputer++;
        }
        else if(match == 5){
            console.log('You Lose! Rock beats Scissors');
            scoreComputer++;
        }
        else if(match == 6){
            console.log('You Win! Scissors beats Paper');
            score++;
        }
    }
    if(score > scoreComputer){
        console.log('You win! \nYou: ' + score + ' \nComputer: ' + scoreComputer)
    }
    else if(score < scoreComputer){
        console.log('You lose! \nYou: ' + score + ' \nComputer: ' + scoreComputer)
    }
    else{
        console.log('Draw! \nYou: ' + score + ' \nComputer: ' + scoreComputer)
    }
}

let rounds = 5;