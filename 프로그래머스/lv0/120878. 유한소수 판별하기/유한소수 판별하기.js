const solution = (a, b) => {
    const minValue = Math.min(a,b);
    for(let i = 2; i <= minValue; i++) {
        if(a % i === 0 && b % i === 0) {
            a /= i;
            b /= i;
        }
    }
    while(b % 2 === 0) b /=2;    
    while(b % 5 === 0) b /=5;  
    
    return b === 1 ? 1: 2;
} 