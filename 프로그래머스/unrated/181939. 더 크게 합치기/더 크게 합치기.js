function solution(a, b) {
    let answer_list = [String(a) + String(b), String(b) + String(a)].map(x => Number(x)).sort((x,y) => y-x);
    return answer_list[0];
}