function solution(arr, queries) {
    let answer = [];
    for(let [s, e, k] of queries){
        let filterArr = arr.slice(s, e+1).filter((x, i) => x > k);
        if(filterArr.length === 0){
            answer.push(-1);
        }
        else{
            answer.push(Math.min(...filterArr));
        }     
    }
    return answer;
    
}