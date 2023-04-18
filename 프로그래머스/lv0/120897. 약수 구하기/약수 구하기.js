function solution(n) {
    return Array(n).fill(0).map((x, i) => x = i+1).filter(x => n % x === 0);;
}