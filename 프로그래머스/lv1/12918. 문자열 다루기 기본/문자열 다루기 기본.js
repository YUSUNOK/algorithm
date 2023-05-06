function solution(s) {
    return [...s].filter(x => isNaN(Number(x))).length === 0 && (s.length === 4 || s.length === 6) ? true : false;
}
