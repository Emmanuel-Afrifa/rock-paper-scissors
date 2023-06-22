let computerDisplay = document.getElementById('computer');
let userDisplay = document.getElementById('user');
let resultDisplay = document.getElementById('results');
let butts = document.querySelectorAll('.option');
console.log(butts)
let gameRecord = document.getElementById('game-record');
let computerRecord = document.getElementById('computer-record');
let userRecord = document.getElementById('user-record');
let drawRecord = document.getElementById('draw-record');
let winner;
let gameCounts = 0;
let computerWinCounts = 0;
let userWinCounts = 0;
let drawCounts = 0;


butts.forEach((butt) => {
    addEventListener('click', gameplay);
    
})


function gameplay(userEvent){
    gameCounts++;

    let computer = computerMove();
    let user = userEvent.target.innerHTML.toLowerCase();
    //console.log(user);

    let result = resultDeterminer(user,computer);
    console.log(result);

    // Printing the various choices
    resultDisplay.innerHTML = `Results: ${result[0]}`; 
    computerDisplay.innerHTML = `Computer Score: ${computer}`;
    userDisplay.innerHTML = `User Score: ${user}`;
    gameRecord.innerHTML = `Games played: ${gameCounts}`;
    computerRecord.innerHTML = `Computer Wins: ${result[3]}`;
    userRecord.innerHTML = `User Wins: ${result[2]}`;
    drawRecord.innerHTML = `Draws: ${result[1]}`  
}

function computerMove(){
    let computerChoice;
    let determiner = Math.floor(Math.random() * 3);
    switch(determiner){
        case 0:
            computerChoice = 'paper';
            break;
        case 1: 
            computerChoice = 'scissors';
            break;
        case 2: 
            computerChoice = 'rock';
            break;
    }
    
    return computerChoice;
}

function resultDeterminer(user,computer){
    let sendArray = [];
    if (user === computer){
        winner = 'Draw';
        drawCounts++;
    }

    if (user === 'paper'){
        if (computer === 'rock'){
            userWinCounts++;
            winner = 'User Wins';
        }
        else if (computer === 'scissors'){
            computerWinCounts++;
            winner = 'Computer Wins';
        }
    }
    
    if (user === 'rock'){
        if (computer === 'paper'){
            computerWinCounts++;
            winner = 'Computer Wins';
        }
        else if (computer === 'scissors'){
            userWinCounts++;
            winner = 'User Wins';
        }
    }
    
    if (user === 'scissors'){
        if (computer === 'rock'){
            computerWinCounts++;
            winner = 'Computer Wins';
        }
        else if (computer === 'paper'){
            userWinCounts++;
            winner = 'User wins';
        }
    }

    sendArray.push(winner, drawCounts, userWinCounts, computerWinCounts);
    return sendArray;

}
