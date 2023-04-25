function solution(my_string, num1, num2) {
    const [smallNum, largeNum] = [Math.min(num1, num2), Math.max(num1, num2)];
    const [smallChar, largeChar] = [my_string[smallNum], my_string[largeNum]];
    let answerArr = [...my_string];
    answerArr[smallNum] = largeChar;
    answerArr[largeNum] = smallChar;
    return answerArr.join("");
}