function solution(intStrs, k, s, l) {
    return intStrs.map((x) => Number(x.substring(s, s+l))).filter(x => x > k);
}