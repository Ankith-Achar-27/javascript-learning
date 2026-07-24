function displayInputValue(){
    const inputElement = document.querySelector('.js-input').value;
    document.querySelector('.js-display')
        .innerHTML =inputElement;
}
