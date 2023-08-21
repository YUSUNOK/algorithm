const solution = (arr, divisor) => {
    const resultArr = arr.filter(element => element % divisor === 0).sort((x,y) => x-y);
    return resultArr.length ? resultArr : [-1];
}