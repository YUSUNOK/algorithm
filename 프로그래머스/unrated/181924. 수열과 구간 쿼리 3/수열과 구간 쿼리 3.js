const solution = (arr, queries) => {
    for(let [i,j] of queries) {
        let temp = arr[j];
        arr[j]= arr[i];
        arr[i] = temp;
    }
    return arr;
}