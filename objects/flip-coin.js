let score = JSON.parse(localStorage.getItem('flipScore')) ||
{
    win:0,
    loss:0
};


function compMove(){
    const randomNumber = Math.random();

    return (randomNumber < 0.5) ?
         'heads' : 'tails';
}


function playerGame(guess){
    const result = compMove();

    if(guess === result){
        score.win+=1;
        console.log('You Win!');
    }
    else{
        score.loss+=1;
        console.log('You Loose!');
    }
    console.log(score);

    localStorage.setItem('flipScore',JSON.stringify(score));
}

function resetScore(){
    console.log('Reset!!')
    score.win=0;
    score.loss=0;
    localStorage.setItem('flipScore',JSON.stringify(score));
    console.log(score);
}
