const solution = (my_string) => {
    const removeSpaceArr = my_string.split(' ');
    return removeSpaceArr.reduce((preValue, currValue, currIndex) =>  {
        if(currValue === '+') return preValue + Number(removeSpaceArr[currIndex + 1]);
        if(currValue === '-') return preValue - Number(removeSpaceArr[currIndex + 1]);
        return preValue;
    }, Number(removeSpaceArr[0]));
}