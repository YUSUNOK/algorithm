function solution(my_string, n) {
    return [...my_string].filter((x, i) => i <= n-1).join("");
}