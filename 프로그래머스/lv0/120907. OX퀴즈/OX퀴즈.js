const solution = (quiz) => {
    let result = [];
    for(let mathExpression of quiz) {
        let myAnswer = 0;
        let removeSpaceArr = mathExpression.split(' ');
        let isPlus = removeSpaceArr[1] === '+' ? true : false;
        let numbersArr = removeSpaceArr.filter((item) => !isNaN(Number(item)));
        myAnswer = isPlus ? Number(numbersArr[0]) + Number(numbersArr[1]) :
        Number(numbersArr[0]) - Number(numbersArr[1]);
        myAnswer === Number(numbersArr[2]) ? result.push('O') : result.push('X');
    }
    return result;
}