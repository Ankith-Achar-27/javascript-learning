let count = 0;

function countPositive(nums){
    nums.forEach(value => {
        if(value>=0){
            count++;
        }
    });
    return count;
};

console.log(countPositive([1,3,-5]));
console.log(countPositive([-1,3,-5,7,10]));
