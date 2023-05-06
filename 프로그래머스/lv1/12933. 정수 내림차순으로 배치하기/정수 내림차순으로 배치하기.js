function solution(n) {
    return Number([...String(n)].sort((x,y) => y - x).join(""));
}