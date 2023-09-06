const solution = (left, right) => {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        const isOdd = Number.isInteger(Math.sqrt(i));
        isOdd ? answer -= i : answer += i;
    }
    return answer;
}