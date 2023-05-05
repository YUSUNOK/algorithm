function solution(my_string, s, e) {
    const removeString = my_string.substring(s, e+1);
    let answer = my_string.replace(removeString, [...removeString].reverse().join(""));
    return answer;
}