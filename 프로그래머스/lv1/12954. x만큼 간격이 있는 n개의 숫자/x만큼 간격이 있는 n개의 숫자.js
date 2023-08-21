const solution = (x, n) => {
    let answer = [];
    //an = x + (n-1)x;
    for(let i = 1; i <= n; i++) {
        answer.push(x + (i-1)*x);
    }
    return answer;
}