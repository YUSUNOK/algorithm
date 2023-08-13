const solution = (a, b) => {
    const minValue = Math.min(a,b);
    for(let i = 2; i <= minValue; i++) {
        if(a % i === 0 && b % i === 0) {
            a /= i;
            b /= i;
        }
    }
    while(true) {
        if(b % 2 !== 0) {
            break;
        }else{
            b /=2;
        }
    }
    
    while(true){
        if(b % 5 !== 0) {
            break;
        }else{
            b /=5;
        }
    }
    return b === 1 ? 1: 2;
} 