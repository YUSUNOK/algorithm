const solution = (number) => {
    let sum = 0;
    for(let strNum of number) {
       sum += Number(strNum);
    }
    return sum % 9;
}