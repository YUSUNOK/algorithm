function solution(str1, str2) {
    let answer = Array(str1.length + str2.length).fill(0);
    [...str1].map((x, i) => answer[i * 2] = x);
    [...str2].map((x, i) => answer[i * 2 + 1] = x);
    return answer.join("");
}
