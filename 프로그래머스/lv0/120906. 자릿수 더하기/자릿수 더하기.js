function solution(n) {
    return [...String(n)].map(x => Number(x)).reduce((prev, curr) => prev + curr);
}