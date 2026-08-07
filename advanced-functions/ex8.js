let eggCount = 0;
function removeEggs(food){
   return food.filter((value)=>{
        if(value === 'egg'){
            eggCount++;
            if(eggCount<=2){
                return false;
            }
        }
        return true;
    })
};

console.log(removeEggs(['egg','apple','egg','egg','ham']));
