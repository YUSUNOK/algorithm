function solution(s) {
    let answer = "";
    const test = s.split(" ").map(x => Number(x));
    answer += Math.min(...test);
    answer += ` ${Math.max(...test)}`;
    return answer;
}