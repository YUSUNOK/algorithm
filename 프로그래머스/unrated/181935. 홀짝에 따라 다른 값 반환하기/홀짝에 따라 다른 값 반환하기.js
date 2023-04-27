function solution(n) {
    let sum = 0;
    for(let i =1 ; i <= Math.ceil(n/2) ; i++){
        if(n % 2 === 1){
            sum += 2 * i - 1;
        }
        else{
            sum += ( 2 * i ) ** 2;
        }
    }
    return sum;
}