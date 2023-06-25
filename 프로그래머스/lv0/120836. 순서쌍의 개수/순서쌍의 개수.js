const solution = (n) => {
    let answer = 0;
    for(let i = 1 ; i <= Math.sqrt(n) ; i++){
        if(i === Math.sqrt(n) && n % i === 0) answer += 1;
        else if(n % i === 0) answer += 2;
    }
    return answer;
}