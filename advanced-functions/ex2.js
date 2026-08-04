function changeText(){
    const buttonElement = document.querySelector('.js-button');
    buttonElement.innerHTML = `Loading....`;
    setTimeout(function(){
        buttonElement.innerHTML = `Finished!`;
    },1000);
}
