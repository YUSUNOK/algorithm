const returnDivisors = (x) => {
    const divisorsSet = new Set();
    for(let i = 1; i <= Math.sqrt(x) ; i++){
        if(x % i === 0){
            divisorsSet.add(i);
            divisorsSet.add(x / i);
        }
    }
    return [...divisorsSet].length;
}

const solution = (n) => 
    Array(n).fill(0).map((x, i) => returnDivisors(i+1)).filter(x => x >= 3).length;