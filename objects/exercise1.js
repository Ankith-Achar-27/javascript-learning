const product = {
    name : 'Basketball',
    price: 2095
};
product.price+=50;
product['delivery time'] = '3 days';
console.log(product)

const product1 ={
    name: 'Bat',
    price: 1000
}
const product2 ={
    name: 'Ball',
    price: 100
}
const product3 ={
    name: 'Ball',
    price: 100
}
function comparePrice(product1,product2){

    return (product1.price>product2.price) ? product2 : product1;
}
function isSameProduct(product1,product2){

    return(
        product1.name === product2.name &&
        product1.price === product2.price
    );
}

console.log(comparePrice(product1,product2));

console.log(isSameProduct(product1,product3));
console.log(isSameProduct(product2,product3));

const string = 'Good Morning';
console.log(string.toLowerCase());

function stringRepeat(str,times){
    return str.repeat(times);
}

console.log(stringRepeat('Good Morning',3));
console.log(stringRepeat('Test',5));
