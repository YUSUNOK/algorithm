function solution(my_string) {
    return [...my_string].filter(x => !(["a", "e", "i", "o", "u"].includes(x))).join("");
}