// DOM(Document Object Model) = built in object by js
// DOM combines html and js together

document.body.innerHTML = 'hello';
document.title = 'Good job.!';

console.log(document.title);
document.title = 'changed';

console.log(document.body);
console.log(typeof document.body); //object

console.log(document.body.innerHTML);
document.body.innerHTML = '<button>Good Job</button>';


// method is a function saved inside an object

 //document.querySelector() ->
 // lets us get any element from the page and put it inside javascript

console.log(document.querySelector('button').innerHTML);

document.querySelector('button')
    .innerHTML = 'Changed';

// start with . to look for class
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement);
