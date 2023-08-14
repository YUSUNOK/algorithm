const solution = (array) => {    
    const frequencyValueMap = new Map();
    array.forEach((element) => {
        frequencyValueMap.set(element, (frequencyValueMap.get(element) + 1 || 1));
    })
    const frequencyValueArr = [...frequencyValueMap];
    if(frequencyValueArr.length === 1) return frequencyValueArr[0][0];
    frequencyValueArr.sort((x, y) => y[1] - x[1]);
    if(frequencyValueArr[0][1] === frequencyValueArr[1][1]) return -1;
    return frequencyValueArr[0][0];
}