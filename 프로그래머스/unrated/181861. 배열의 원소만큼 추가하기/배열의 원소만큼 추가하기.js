function solution(arr) {
    return arr.reduce((list, curr) => [...list, ...Array(curr).fill(curr)], []);
}