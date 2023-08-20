const solution = (arr, queries) => {
    let result = [];
    for(let query of queries) {
       let filterArr = arr.filter((x, i) => query[0] <= i && i <= query[1] && x > query[2]);
        if(filterArr.length > 0) {
            result.push(Math.min(...filterArr));
        }else{
            result.push(-1);
        }
    }
    return result;
}