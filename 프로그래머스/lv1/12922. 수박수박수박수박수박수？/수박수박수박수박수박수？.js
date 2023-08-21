const solution = (n) => {
    let answer = '수박'.repeat(Math.floor(n / 2));
    return n % 2 === 1 ? answer += '수' : answer;
}