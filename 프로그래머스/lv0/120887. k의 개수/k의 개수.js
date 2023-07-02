const solution = (i, j , k) => 
    Array(j-i+1)
    .fill(i)
    .map((x, i) =>      
        [...String(x+i)].filter(x => x === String(k)).length)
    .reduce((prev, curr) => prev + curr);