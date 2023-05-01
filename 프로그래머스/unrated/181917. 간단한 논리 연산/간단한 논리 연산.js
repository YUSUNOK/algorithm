function solution(x1, x2, x3, x4) {
    const oneResult = x1 || x2;
    const twoResult = x3 || x4;
    return oneResult && twoResult;
}