let cartQuantity = 0;

function showQuantity(){
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addOne(){
        cartQuantity += 1;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function addTwo(){
    cartQuantity +=2;
    console.log(`Cart quantity: ${cartQuantity}`);
}

function addThree(){
        cartQuantity += 3;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function addFour(){
        cartQuantity += 4;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function addFive(){
        cartQuantity += 5;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function subTwo(){
        cartQuantity -= 2;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function subThree(){
        cartQuantity -= 3;
        console.log(`Cart quantity: ${cartQuantity}`);
}

function removeFromCart(){
    cartQuantity -= 1;
    console.log('An Item removed from cart.!');
    console.log(`Cart quantity: ${cartQuantity}`);
}

function resetCart(){
     cartQuantity=0;
     console.log(`Cart Reset`);
    console.log(`Cart quantity: ${cartQuantity}`);
}
