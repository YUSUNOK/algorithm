const solution = (s) => {
    const filterArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const sLength = s.length;
    if(!(sLength === 4 || sLength === 6)) return false;
    const fiterSLength = [...s].filter((x) => filterArr.includes(x)).length;
    return sLength === fiterSLength ? true: false;
}