 function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    // innerText omits spaces only considers text
    // innerHTML considers spaces also
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';

        //classList - object
        buttonElement.classList.add('is-subscribed');
    } else {
        buttonElement.innerHTML = 'Subscribe';
        buttonElement.classList.remove('is-subscribed');
    }
}

function calculateTotal(){
    const inputElement = document.querySelector('.js-cost-input');
    let cost = Number(inputElement.value);

    if(cost<100){
        cost=cost+50;
    }
    document.querySelector('.js-total-cost')
        .innerHTML = `Rs${cost}`;
}

function handleKeyDown(event){
    if(event.key === 'Enter'){
        calculateTotal();
    }
}



