function solution(my_string, num1, num2) {
    const [charA, charB] = [my_string[num1], my_string[num2]];
    let answerArr = [...my_string];
    answerArr[num1] = charB;
    answerArr[num2] = charA;
    return answerArr.join("");
}