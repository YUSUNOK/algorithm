const solution = (n) => {
    if(n === 1) return 0;
    for (let i = 1; i<=500; i++) {
        const isEven = n % 2 === 0;
        isEven ? n /= 2 : n = n*3+1;
        if(n === 1) return i;
    }
    return -1;
}