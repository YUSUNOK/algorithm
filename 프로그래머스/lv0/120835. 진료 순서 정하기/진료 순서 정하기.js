const solution = (emergency) => {
    const orderArr = emergency.slice().sort((x, y) => y-x);
    return emergency.map((x) => orderArr.indexOf(x)+1);
}