function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
    // innerText omits spaces only considers text
    // innerHTML considers spaces also
    if (buttonElement.innerText === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
}
