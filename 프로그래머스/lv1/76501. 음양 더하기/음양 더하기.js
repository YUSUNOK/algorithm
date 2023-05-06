function solution(absolutes, signs) {
    return absolutes.reduce((prev, curr, i) => signs[i] ? prev + curr : prev - curr, 0);
}