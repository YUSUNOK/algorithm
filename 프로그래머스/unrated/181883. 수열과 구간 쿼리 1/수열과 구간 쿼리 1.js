function solution(arr, queries) {
    for(let [start, end] of queries) {
        for(let i = start ; i <=end ; i++){
            arr[i] += 1;
        }
    }
    return arr;
}