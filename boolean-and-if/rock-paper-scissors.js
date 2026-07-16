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

function choseRock(){
    const compMove = pickCompMove();
    let result = '';
    if(compMove === 'rock'){
        result = 'Tie';
    } else if(compMove === 'paper'){
        result = 'You lose'
    } else if(compMove === 'scissors'){
        result = 'You Win'
    }
    alert(`You picked rock.Computer picked ${compMove}. ${result}`);
}

function chosePaper(){
    const compMove = pickCompMove();

    let result = '';
    if(compMove === 'rock'){
        result = 'You Win';
    } else if(compMove === 'paper'){
        result = 'Tie'
    } else if(compMove === 'scissors'){
        result = 'You Lose'
    }
    alert(`You picked paper.Computer picked ${compMove}. ${result}`);
}

function choseSccisor(){
   const compMove = pickCompMove();
    let result = '';
    if(compMove === 'rock'){
        result = 'You Lose';
    } else if(compMove === 'paper'){
        result = 'You Win'
    } else if(compMove === 'scissors'){
        result = 'Tie'
    }
    alert(`You picked scissor.Computer picked ${compMove}. ${result}`);
}
