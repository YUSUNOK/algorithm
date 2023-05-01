function solution(arr, idx) {
    let answer = arr.map((x, i) => i >= idx && x === 1 ? i : -1).filter(x => x !== -1);
    return answer.length === 0 ? -1 : answer[0];
}