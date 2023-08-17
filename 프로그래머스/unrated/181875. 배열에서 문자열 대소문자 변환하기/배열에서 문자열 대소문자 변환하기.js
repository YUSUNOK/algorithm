const solution = (strArr) => {
    return strArr.map((x, i) => i % 2 !== 0 ? x.toUpperCase() : x.toLowerCase());
}