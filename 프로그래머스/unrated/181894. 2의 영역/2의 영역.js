const solution = (arr) => {
    const startIndex = arr.indexOf(2);
    if(startIndex === -1) return [-1];
    const lastIndex = arr.lastIndexOf(2);
    return arr.slice(startIndex, lastIndex+1);    
}