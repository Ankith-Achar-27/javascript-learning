    // use dafault operator ||
    // if leftside is truthy use JSON.parse
    // if leftside is falsy use rightside as default
    let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    loss: 0,
    tie: 0
    };

    updateScoreElement();



    // null is falsy value
    // As score === null
    // instead use !score

    /* if (!score) {
        score = {
            win: 0,
            loss: 0,
            tie: 0
        };
    } */
    function pickCompMove() {
    const randomNumber = Math.random();
    let compMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        compMove = 'rock';
    }
    else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
        compMove = 'paper';
    }
    else if (randomNumber > 2 / 3 && randomNumber < 1) {
        compMove = 'scissors';
    }
    return compMove;
    }

    function playerGame(playerMove) {
    const compMove = pickCompMove();
    let result = '';
    if (playerMove === 'rock') {
        if (compMove === 'rock') {
            result = 'You Tie';
        } else if (compMove === 'paper') {
            result = 'You Lose'
        } else if (compMove === 'scissors') {
            result = 'You Win'
        }
    }
    if (playerMove === 'paper') {
        if (compMove === 'rock') {
            result = 'You Win';
        } else if (compMove === 'paper') {
            result = 'You Tie'
        } else if (compMove === 'scissors') {
            result = 'You Lose'
        }
    }
    if (playerMove === 'scissors') {
        if (compMove === 'rock') {
            result = 'You Lose';
        } else if (compMove === 'paper') {
            result = 'You Win'
        } else if (compMove === 'scissors') {
            result = 'You Tie'
        }
    }
    if (result === 'You Win') {
        score.win += 1;
    }
    else if (result === 'You Lose') {
        score.loss += 1;
    }
    else if (result === 'You Tie') {
        score.tie += 1;
    }
    // Every referesh resets the varibale values (win,loss,tie)
    // use localStrorage to store score in local memory
    // localStorage only supports strings
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-result')
            .innerHTML = `${result}`;

    document.querySelector('.js-moves')
            .innerHTML = `You: ${playerMove}     Computer:${compMove}`

    updateScoreElement();
    }

    function updateScoreElement(){
    document.querySelector('.js-score')
        .innerHTML = ` Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
    }

    function resetScore(){
        score.win=0;
        score.loss=0;
        score.tie=0;
        localStorage.removeItem('score');
        updateScoreElement();
    }
