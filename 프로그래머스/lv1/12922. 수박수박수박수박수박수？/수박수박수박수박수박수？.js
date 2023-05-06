function solution(n) {
    return Array(n).fill('').map((x,i) => i % 2 === 0? '수' : '박').join("");
}