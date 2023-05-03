function solution(arr, queries) {
    let answer = arr.slice(0);
    for(let [s,e,k] of queries){
       answer = answer.map((x, i) => i >= s && i <= e && i % k === 0 ? x+1 : x);
    }
    return answer;
}