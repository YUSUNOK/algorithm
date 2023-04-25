function solution(array, n) {
    const absArray = [...array].map(x => Math.abs(x - n));
    return array.includes(n - Math.min(...absArray)) ? n - Math.min(...absArray) : n + Math.min(...absArray);
}