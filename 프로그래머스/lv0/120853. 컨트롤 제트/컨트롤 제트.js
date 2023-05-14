function solution(s) {
    let answer = 0;
    const list = s.split(" ").map(x => Number(x));
    for(let i = 0 ; i < list.length ; i++){
        isNaN(list[i]) ? answer -= list[i - 1] : answer += list[i];
    }
    return answer;
}