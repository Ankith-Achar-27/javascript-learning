// function convertToFahrenheit(celsius){
//     fahrenheit = (celsius * 9 / 5)+32;
//     console.log(`${celsius}C = ${fahrenheit}F`)
// }
// function convertToCelsius(fahrenheit){
//     celsius = (fahrenheit - 32) * 5 / 9;
//     console.log(`${fahrenheit}F = ${celsius}C`)
// }

function convertTemperature(value , unit){
    if(unit === 'C' || unit === 'c'){
        fahrenheit = (value * 9 / 5)+32;
        console.log(`${value}C = ${fahrenheit}F`)
    }
    else if(unit === 'F' || unit === 'f'){
        celsius = (value - 32) * 5 / 9;
        console.log(`${value}F = ${celsius}C`)
    }
    else{
        console.log('Invalid unit(eg. F or C only valid)');
    }
}
