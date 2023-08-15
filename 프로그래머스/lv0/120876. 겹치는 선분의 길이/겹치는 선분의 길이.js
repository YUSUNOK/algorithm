const solution = (lines) => {
    const lineMap = new Map();
    for(let line of lines) {
        for(let startNum = line[0]; startNum < line[1] ; startNum++) {
            lineMap.set(`${startNum}-${startNum+1}`, (lineMap.get(`${startNum}-${startNum+1}`) || 0) + 1);
        }
    }
    return [...lineMap].filter((line) => line[1] >= 2).length;
}