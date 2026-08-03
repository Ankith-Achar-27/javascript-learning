

// Functions are values

function greeting(){
    console.log('hello ankith.!');
}
greeting();

const num = 5;

/*

const function1 = function greeting(){
    console.log('hello again')
}; */

// Anonymous function can be assigned to a variable
const function1 = function(){
    console.log('hello again')
};
console.log(function1);
console.log(typeof function1); // function

function1(); // hello again

const obj1 = {
    num:2,
    fun: function() {
        console.log('hello once again');
    }
};

obj.fun();

// Passin a value to a function
function display(param){
    console.log(param);
}
display(2); // 2

// Passing a function to another function
function run(param){
    param();
}
run(function (){
    console.log('hello from run function');
});

// setTimeout function - sets a timer and immediately goes to next function
setTimeout(function(){
    console.log('timeout');
},3000); // waits for 3 seconds and displays 'timeout'

// Asynchronous code - computer wont wait for the line to finish before going to the next line
console.log('next line');

// setInterval - keeps running the functions every 3sec

setInterval(function(){
    console.log('interval')
},3000);

console.log('next line');
