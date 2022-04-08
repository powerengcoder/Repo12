function myCounter(n){
    if(n<1){
        return [];
    }else{
        const arr = myCounter(n-1);
        arr.push(n);
    }

}

console.log(myCounter(5));