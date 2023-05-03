function solution(my_strings, parts) {
    let answer = "";
    parts.forEach(([startIndex, endIndex], i) => answer += (my_strings[i].slice(startIndex, endIndex+1)));
    return answer;
}