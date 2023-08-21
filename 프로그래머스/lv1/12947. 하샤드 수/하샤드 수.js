const solution = (x) => {
    let pureX = x;
    let sum = 0;
    while(x !== 0) {
        sum += x % 10;
        x = Math.floor(x/10);
    }
    return !(pureX % sum);
}