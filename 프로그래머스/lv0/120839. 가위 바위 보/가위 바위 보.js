function solution(rsp) {
    // 2 -> 0
    // 0 -> 5
    // 5 -> 2
    var answer = [5, undefined, 0, undefined, undefined, 2];
    return  [...rsp].map(x => x = answer[x]).join("");
}