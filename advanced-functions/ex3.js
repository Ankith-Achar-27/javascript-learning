let timeOutID;

function showMessage(){
    const messageElement = document.querySelector('.js-message');

    messageElement.innerHTML = `Added`;

    clearInterval(timeOutID);

    timeOutID = setTimeout(function(){
        messageElement.innerHTML = ``;
    },2000);
}
