const solution = (numbers, n) => {
    let answer = 0;
    for(let number of numbers) {
        answer += number;
        if(answer > n) return answer;
    }
}