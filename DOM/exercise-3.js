function displayName(){
    const nameElement = document.querySelector('.js-input').value;

    document.querySelector('.js-display')
        .innerHTML = `Your name is: ${nameElement}`;
}

function handleEvent(event){
    if(event.key === 'Enter'){
        displayName();
    }
}
