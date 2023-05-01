function solution(my_string, is_suffix) {
    const reverseIs_suffix = [...is_suffix].reverse().join("");
    return [...my_string].reverse().join("").indexOf(reverseIs_suffix) === 0 ? 1 : 0;
}