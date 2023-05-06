function solution(a, b) {
    const length = Math.abs(a-b) + 1;
    return length % 2 === 0 ? (a + b) * Math.floor(length / 2) :(a + b) * Math.floor(length / 2) + (a + b) /2 ;
}