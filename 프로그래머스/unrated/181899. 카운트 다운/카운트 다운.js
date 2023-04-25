function solution(start, end) {
    return Array.from(Array(start - end + 1), (_, i) => start - i);
}