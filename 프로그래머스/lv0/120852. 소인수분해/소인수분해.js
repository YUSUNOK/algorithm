const solution = (n) => {
    let answer = [];
    for(let i = 2; i <= n ; i++) {
        if(n % i === 0) {
            answer.push(i);
            n = n / i;
            i = i - 1;
        }
    }
    return Array.from(new Set(answer));
}