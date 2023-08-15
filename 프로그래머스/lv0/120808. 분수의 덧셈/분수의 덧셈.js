const solution = (numer1, denom1, numer2, denom2) => {
    let upValue = numer1 * denom2 + numer2 * denom1;
    let downValue = denom1 * denom2;
    
    for(let i = Math.min(upValue, downValue); i >=2 ; i--) {
        if(upValue % i === 0 && downValue % i === 0) {
            upValue /= i;
            downValue /= i;
            break;
        }
    }
    return [upValue, downValue];
}