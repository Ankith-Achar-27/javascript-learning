// forEach Loop
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

// .filter()
console.log([1,2,-4,5].filter((value,index)=>{
    /*if(value>=0){
        return true; // puts the value in new array
    }
    else{
        return false;
    } */
// short hand
    return value>=0;
}));

// [1,1,2] double the element in the array

/*console.log([1,1,2].map((value,index)=>{
    return 2*value;
})); //[2,2,4] */
console.log([1,1,2].map(value=>{ return value*2;}));
