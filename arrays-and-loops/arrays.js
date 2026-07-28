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


const array1 =[1,2,3];
const array2 =array1.slice();
array2.push(4);
console.log(array1);
console.log(array2);

//Deconstructing
const [firstValue, secondValue] = [1,2,3];

/*for(let i=1;i<=10;i++){
    if( i === 3){
        continue; // skip the current iteration
    }
    console.log(i);
    if(i===8){
        break; // exit a loop early
    }
}*/

//skip a number if it divisible by 3

for(let i=1;i<=10;i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}

function doubleArray(nums) {
    //const nums = [1,2,3,4];
    const numsDoubled = [];

    for(let i=0;i<nums.length;i++){
        const n = nums[i];
        numsDoubled.push(2*n);
    }
    return numsDoubled;
}

console.log(doubleArray([1,1,3]));
console.log(doubleArray([3,5,4]));
