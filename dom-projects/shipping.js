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
