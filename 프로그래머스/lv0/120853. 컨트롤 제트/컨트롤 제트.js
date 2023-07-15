const solution = (s) => {
    let result = 0;
    const removeSpaveArr = s.split(' ');
    removeSpaveArr.forEach((x, i) => {
        if(x === 'Z') result -= removeSpaveArr[i-1];
        else result += Number(x);
    })
    return result;
}