
['apple','banana','mango','pear'].forEach((value,index) =>{
    console.log(value);
    console.log(index);
});

const regularFunction = function(param){
    return (param + 10);
};
console.log(regularFunction(5));


const arrowFunction = (param) =>{
   return param+10;
};
console.log(arrowFunction(6));

const object1 = {
    method: () => {
        console.log('Arraow function method');
    },
    method2 (){
        console.log('Short hand method');
    }
};

const buttonElement = document.querySelector('.js-button');
const eventListener = ()=>{
    console.log('CLicked');
}
buttonElement.addEventListener('click',eventListener);
buttonElement.removeEventListener('click',eventListener);

buttonElement.addEventListener('click',()=>{
    console.log('clicked2')}
);
