const solution = (my_string, num1, num2) => {
    const [firstStr, secondStr] = [my_string[num1], my_string[num2]];
    let strToArr = [...my_string];
    strToArr[num1] = secondStr;
    strToArr[num2] = firstStr;
    return strToArr.join('');
}