function solution(my_string) {
    return [...my_string].map((x,i) => x.charCodeAt() >= 97 ? x.toUpperCase() : x.toLowerCase()).join("");
}