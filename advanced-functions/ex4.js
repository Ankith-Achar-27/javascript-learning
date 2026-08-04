let message = 2;

let intervalId;

let isDisplayNotification;

displayNotification();

function  displayNotification(){
    if(isDisplayNotification){
        return;
    }
    isDisplayNotification = true;

    intervalId = setInterval(function(){
    if(document.title === 'App' && message>0){
        document.title = `(${message}) New Messages`;
    }
    else{
        document.title = `App`;
    }
},1000);
}

function stopNotification(){
    clearInterval(intervalId);
    document.title = `App`
}
