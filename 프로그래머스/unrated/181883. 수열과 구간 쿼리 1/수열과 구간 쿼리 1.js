const solution = (arr, queries) => {
    for(let query of queries) {
        arr = arr.map((x, i) => i >= query[0] && i <= query[1] ? x+1 : x)
    }
    return arr;
}