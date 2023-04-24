function solution(n, k) {
    return Array(n).fill(1).map((x,i) => x + i).filter(x => x % k ===0);
}