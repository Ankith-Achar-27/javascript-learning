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

function reserCart(){
     cartQuantity=0; console.log(`Cart Reset`);
    console.log(`Cart quantity: ${cartQuantity}`);
}
