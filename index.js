
var pl = '' ;
var pc = '' ;
var isOn = false ;
var isChosen = false;
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
    if(isChosen == false){
        pl = e;
        pc = computerPlay();
        playGame(pl,pc);
    }
}
//Function that makes the animations--------------------------------------------------------------------//
function playGame(playerC,computerC){
    if(isChosen == false){
        const playerSide = document.querySelector('.player-choice');
        const showdownButton = document.querySelector('.showdown-button');
        if(playerC == 'ROCK'){
            playerSide.classList.add('rock');
        }else if(playerC == 'PAPER'){
            playerSide.classList.add('paper');
        }else{
            playerSide.classList.add('scissors');
        }
        showdownButton.classList.add('showdown-button-playing');
        console.log(playerC);
        console.log(computerC);
        console.log(isOn);
        isOn = true;
        isChosen = true;
    }
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
const play = document.querySelector('.showdown-button');
    play.addEventListener('click',() => {
        if(isOn==true){
            const resText = document.createElement('h2');
                resText.textContent = gameResult(pl,pc) ;
                document.querySelector('.showdown-button').appendChild(resText) ;

                document.querySelector('.showdown-button').classList.add('win-text');
                if(pc == 'ROCK'){
                    document.querySelector('.computer-choice').classList.add('rock');
                }else if(pc == 'PAPER'){
                    document.querySelector('.computer-choice').classList.add('paper');
                }else{
                    document.querySelector('.computer-choice').classList.add('scissors');
                }
            isOn = false ;
        }
    });
    function resetGame(){
        if (isOn == false && isChosen == true){
            if(pc == 'ROCK'){
                document.querySelector('.computer-choice').classList.remove('rock');
            }else if(pc == 'PAPER'){
                document.querySelector('.computer-choice').classList.remove('paper');
            }else{
                document.querySelector('.computer-choice').classList.remove('scissors');
            }
        if(pl == 'ROCK'){
            document.querySelector('.player-choice').classList.remove('rock');
        }else if(pl == 'PAPER'){
            document.querySelector('.player-choice').classList.remove('paper');
        }else{
            document.querySelector('.player-choice').classList.remove('scissors');
        }
        document.querySelector('.showdown-button').removeChild(document.querySelector('h2')) ;
        pl = '';
        pc ='';
        isChosen = false;
        document.querySelector('.showdown-button').classList.remove('showdown-button-playing');
        
        }
    }
