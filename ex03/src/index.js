function rangeOfNumbers(startN, endN){
    if(startN > endN){
        return "The starting number will always be less than or equal to the ending number";
    }else{
        const arr = rangeOfNumbers(startN-1, endN-1);
        arr.push(startN);
        return arr;
    }



}

console.log(rangeOfNumbers(1,7));
module.exports = rangeOfNumbers;