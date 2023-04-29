function solution(my_string, overwrite_string, s) {
    const arrayStr = [...my_string];
    arrayStr.splice(s, overwrite_string.length, overwrite_string);
    return arrayStr.join("");
}