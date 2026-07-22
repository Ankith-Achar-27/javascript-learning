function pickCompMove(){
    const randomNumber = Math.random();
    let compMove = '';

    if(randomNumber >= 0 && randomNumber < 1 / 3){
        compMove = 'rock';
    }
    else if(randomNumber > 1/3 && randomNumber < 2/3){
         compMove = 'paper';
    }
    else if(randomNumber > 2/3 && randomNumber < 1){
         compMove = 'scissors';
    }
    return compMove;
}

function playerGame(playerMove){
    const compMove = pickCompMove();
    let result = '';
    if(playerMove === 'rock'){
        if(compMove === 'rock'){
            result = 'Tie';
        } else if(compMove === 'paper'){
            result = 'You lose'
        } else if(compMove === 'scissors'){
            result = 'You Win'
        }
    }
    if(playerMove === 'paper'){
            if(compMove === 'rock'){
            result = 'You Win';
        } else if(compMove === 'paper'){
            result = 'Tie'
        } else if(compMove === 'scissors'){
            result = 'You Lose'
        }
    }
    if(playerMove === 'scissors'){
        if(compMove === 'rock'){
            result = 'You Lose';
        } else if(compMove === 'paper'){
            result = 'You Win'
        } else if(compMove === 'scissors'){
            result = 'Tie'
        }
    }

    alert(`You picked ${playerMove}.Computer picked ${compMove}. ${result}`);
}
