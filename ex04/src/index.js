function sumFibonacci(num){
    if (num < 0){
        return 0;
    }else if (num === 1){
        return 1;
    } else{
    let previous = 0;
    let current = 1;
    let result = 0;
    while (current <= num) {
      if (current % 2 !== 0) {
        result += current;
      }
      current += previous;
      previous = current - previous;
    }
  
    return result;
}
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;