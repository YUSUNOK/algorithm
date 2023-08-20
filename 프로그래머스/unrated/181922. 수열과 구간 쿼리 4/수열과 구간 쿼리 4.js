const solution = (arr, queries) => {
    arr = arr.map((x, i) => {
        let addValue = 0;
        for(let query of queries) {
            if(i >= query[0] && i <= query[1] && i % query[2] === 0) {
                addValue++;
            }
        }
        return x+addValue;
    })
    return arr;
}