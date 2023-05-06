function solution(x, n) {
    let answer = [];
    for(let i =0; i < n; i++){
        answer.length === 0 ? answer.push(x) : answer.push(answer[answer.length -1] + x);
    }
    return answer;
}