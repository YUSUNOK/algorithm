function factorial(n) {
    if( n === 1 || n === 0 ) return 1;
    return n * factorial(n-1);
}

function solution(balls, share) {
    if(balls === share) return 1;
    let p = 1;
    for(let i = 0 ; i< share ; i++){
        p *= (balls - i);
    }
    return Math.ceil(p / factorial(share));
}