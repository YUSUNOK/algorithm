function solution(arr, intervals) {
    var answer = [];
    for(let [startIndex, endIndex] of intervals){
        answer = answer.concat(arr.slice(startIndex, endIndex + 1));
    }
    return answer;
}