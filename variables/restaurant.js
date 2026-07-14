let cost = 0;
let coffee=0;
let bagel =0;
let soup=0;

function addCoffee(){
    coffee++;
    cost+=5;
    console.log(`Coffee quantity: ${coffee}`);
    console.log(`Cost of food: $${cost}`);
}

function addBagel(){
    bagel++;
    cost+=(5/2);
    console.log(`Bagel quantity: ${bagel}`);
    console.log(`Cost of food: $${cost}`);
}

function addSoup(){
    soup++;
    cost+=9;
    console.log(`Soup quantity: ${soup}`);
    console.log(`Cost of food: $${cost}`);
}

function addTotal(){
    const tax = 0.1*cost;
    const totalCost = cost + tax;

    console.log(`Total Cost: \n
    Coffee: ${coffee} X $5
    Bagel: ${bagel} X $1.5
    Soup: ${soup} X $9
    Price: $${totalCost}`);
}
