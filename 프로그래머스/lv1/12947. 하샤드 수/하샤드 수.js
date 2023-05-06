function solution(x) {
    let n = x;
    let sum = 0;
    while(x !==0){
        sum += x % 10;
        x = ~~(x / 10);
    }
    return n % sum === 0;
}