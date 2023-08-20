const solution = (strArr) => {
    const lengthCountMap = new Map();
    for(let str of strArr) {
        lengthCountMap.set(str.length, (lengthCountMap.get(str.length) || 0) + 1);
    }
    return [...lengthCountMap].sort((x, y) => y[1] - x[1])[0][1];
}