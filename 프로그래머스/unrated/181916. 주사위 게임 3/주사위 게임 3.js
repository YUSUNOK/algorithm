const solution = (a, b, c, d) => {
    const keyValueMap = new Map();
    
    [a, b, c, d].forEach((x) => {
        keyValueMap.set(x, (keyValueMap.get(x) || 0) +1);
    })
    if([...keyValueMap].length === 1) return 1111 * a;
    if([...keyValueMap].length === 4) return Math.min(a, b, c, d);
    if([...keyValueMap].length === 3) {
       return [...keyValueMap].filter((x, i) => x[1] === 1).reduce((prev, curr) => prev * curr[0], 1);  
    }
    if([...keyValueMap].length === 2) {
        if([...keyValueMap].filter((x, i) => x[1] === 2).length) {
            return ([...keyValueMap][0][0] + [...keyValueMap][1][0]) * Math.abs ([...keyValueMap][0][0] - [...keyValueMap][1][0]);
        }else{
            let sortArr = [...keyValueMap].sort((x, y) => y[1] - x[1]);
            return (10 * sortArr[0][0] + sortArr[1][0]) ** 2;
        }
    }
}