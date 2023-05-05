function solution(my_string, s, e) {
    const answer = [...my_string];
    const inputString = [...my_string.slice(s, e+1)].reverse().join("");
    answer.splice(s, inputString.length, inputString);
    return answer.join("");
}