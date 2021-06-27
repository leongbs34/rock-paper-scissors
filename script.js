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

function game(playerSelection){

    console.log('Round ' + currentRound);
    let match = playRound(playerSelection);
    if(match == 0){
        printResult(`Draw! <br>${score} - ${scoreComputer}`);
    }
    else if(match == 1){
        scoreComputer++;
        printResult(`You Lose! Paper beats Rock <br>${score} - ${scoreComputer}`);
    }
    else if(match == 2){
        score++;
        printResult(`You Win! Rock beats Scissors <br>${score} - ${scoreComputer}`);
    }
    else if(match == 3){
        score++;
        printResult(`You Win! Paper beats Rock <br>${score} - ${scoreComputer}`);
    }
    else if(match == 4){
        scoreComputer++;
        printResult(`You Lose! Scissors beats Paper <br>${score} - ${scoreComputer}`);
    }
    else if(match == 5){
        scoreComputer++;
        printResult(`You Lose! Rock beats Scissors <br>${score} - ${scoreComputer}`);
    }
    else if(match == 6){
        score++;
        printResult(`You Win! Scissors beats Paper <br>${score} - ${scoreComputer}`);
    }
    currentRound += 1;

    if(score == rounds){
        printResult('You win! <br>You: ' + score + ' <br>Computer: ' + scoreComputer)
        score = 0;
        scoreComputer = 0;
        currentRound = 1;
    }
    else if(scoreComputer == rounds){
        printResult('You lose! <br>You: ' + score + ' <br>Computer: ' + scoreComputer)
        score = 0;
        scoreComputer = 0;
        currentRound = 1;
    }

}

function printResult(result){
    const div = document.querySelector('div[id="result"]');
    div.innerHTML = result;
}

const btns = document.querySelectorAll('button');
const h1 = document.querySelector('h1');
btns.forEach(btn => btn.addEventListener('click', function(e){
    let playerSelection = e.target.getAttribute('data-value');
    game(playerSelection);
    h1.innerHTML = `Round ${currentRound}`;
}));

let rounds = 5;
let score = 0;
let scoreComputer = 0;
let currentRound = 1;
