
function calculateTax(price , taxPercent = 0.1){ // default value of taxPercent is 0.1
    console.log(price * taxPercent);
}

calculateTax(2000,0.1);
calculateTax(5000); // no taxPercent parameter given, so default value of 0.1 is used
