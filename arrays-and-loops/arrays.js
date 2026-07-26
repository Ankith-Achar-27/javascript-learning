//  Array is an object(a special type of object)
// Since it is an object it have methods

// 1. Adding Elements
// push() - adds elements at the end

const arr = [1,2,3,4];
arr.push(5);
console.log(arr); // [1, 2, 3, 4, 5]

//unshift() --- add elements to the beginning

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4, 5]

// 2. Removing Elements
// pop() -- removes the last element
console.log(arr); // [0, 1, 2, 3, 4, 5]
arr.pop();
console.log(arr);// [0, 1, 2, 3, 4]

//shift() -- removes the first element
arr.shift();
console.log(arr);// [1, 2, 3, 4]

//3. Extracting elements
// slice() -- returs part of an array without changing the original
console.log(arr);// [1, 2, 3, 4]
console.log(arr.slice(1,3)); // 1 and 3 are indices

//4. Insert or Remove
// splice() - remove

const num4 = [1,2,3,4,5];
num4.splice(2,1);
console.log(num4); //[1, 2, 4, 5] 3 is spliced

//splice() - insert

num4.splice(2,0,3) //(fromIndex,remove,insert)
console.log(num4);

//COMBINE ARRAYS

const a = [1,2,3];
const b = [4,5,6];

const c = a.concat(b);
console.log(c); //[1, 2, 3, 4, 5, 6]

// SEARCHING

const ser = ['ant','cat'];
console.log(ser.includes('cat')); // true


