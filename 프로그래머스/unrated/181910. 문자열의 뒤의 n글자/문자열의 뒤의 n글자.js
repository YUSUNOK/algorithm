function solution(my_string, n) {
    return [...my_string].filter((x,i) => i >= my_string.length - n).join("");
}