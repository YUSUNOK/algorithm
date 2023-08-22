const solution = (n, m) => {
    let valueOne;
    let valueTwo;
    for(let i = Math.min(m,n); i >= 1; i--) {
        if(n % i === 0 && m % i === 0) {
            valueOne = i;
            break;
        }
    }
    
    for(let i = Math.max(m,n); i<= m * n; i++) {
        if(i % m === 0 && i % n === 0) {
            valueTwo = i;
            break;
        }
    }
    return [valueOne, valueTwo];
}