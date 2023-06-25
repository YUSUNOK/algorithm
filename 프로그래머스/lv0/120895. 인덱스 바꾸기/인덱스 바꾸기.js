const solution = (my_string, num1, num2) => {
    let strToArr = [...my_string];
    [strToArr[num2], strToArr[num1]] = [my_string[num1], my_string[num2]];
    return strToArr.join('');
}