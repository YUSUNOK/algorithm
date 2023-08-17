const solution = (n) => {
    let answer = 0;
    for(let i = 1; i<= n; i+=2) {
        if(n % 2 !== 0) {
            answer += i;
        }else{
            answer += (i+1) ** 2;
        }
    }
    return answer;
}