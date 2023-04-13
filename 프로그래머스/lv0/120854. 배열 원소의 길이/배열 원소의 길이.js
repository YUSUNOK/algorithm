function solution(strlist) {
    var answer = Array(strlist.length);
    strlist.map((x, i) => answer[i] = x.length);
    return answer;
}