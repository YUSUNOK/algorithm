const solution = (x, n) => {
    let answer = [];
    for(let i = [x, 1]; i[1] <= n; i[1] +=1) {
        answer.push(i[0] * i[1]);
    }
    return answer;
}