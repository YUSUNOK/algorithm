const solution = (a, b) => {
    let value = [Math.min(a,b), Math.max(a,b)];
    let answer = 0;
    for(let i = value[0]; i <= value[1]; i++) {
        answer += i;
    }
    return answer;
}