
var pl = '' ;
var pc = '' ;
//Function That sorts the computer choice--------------------------------------------------------------//
function computerPlay (){
    let i = Math.floor(Math.random()*4);
    if (i==0){
        return 'ROCK';
    }else if(i==1){
        return 'PAPER';
    }else{
        return 'SCISSORS';
    }
}
//Function that stores the player choice-----------------------------------------------------------------//
function playerChoice(e) {
    pl = e;
    pc = computerPlay();
    playGame(pl,pc);

}
//Function that makes the animations--------------------------------------------------------------------//
function playGame(playerC,computerC){
    const playerSide = document.querySelector('.player-choice');
    if(playerC == 'ROCK'){
        playerSide.classList.add('rock');
    }else if(playerC == 'PAPER'){
        playerSide.classList.add('paper');
    }else{
        playerSide.classList.add('scissors');
    }
    console.log(playerC);
}












//Function that settles the score-------------------------------------------------------------------------//
function gameResult(player,computer){
    if (player == 'ROCK'){
        if(computer == 'ROCK'){
            return 'Draw';
        }else if(computer == 'PAPER'){
            return 'You Suck';
        }else{
            return 'That luck Motherfucker'
        }
    }else if(player == 'PAPER'){
        if(computer == 'ROCK'){
            return 'You won';
        }else if(computer == 'PAPER'){
            return 'Draw Bitch';
        }else{
            return 'Ha, gotcha!'
        }
    }else{
        if(computer == 'ROCK'){
            return 'SUCKEEER';
        }else if(computer == 'PAPER'){
            return 'Lucky Shot';
        }else{
            return 'Stop imitating me!'
        }
    }
}
