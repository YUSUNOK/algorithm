const solution = (n) => {
    let [preFactorial, nowFactorial] = [1, 1];
    for(let i = 1; ; i++){
        nowFactorial = preFactorial * i;
        if(nowFactorial === n ) return i;
        if(nowFactorial > n) return i - 1;
        preFactorial = nowFactorial;     
    }
}