function solution(arr, divisor) {
    let answer = arr.filter((x) => x % divisor === 0).sort((x,y) => x - y);
    return answer.length === 0? [-1] : answer;
}