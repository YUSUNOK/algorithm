function solution(s) {
    return s[0] === '-' ? -Number(s.substring(1)) : Number(s);
}