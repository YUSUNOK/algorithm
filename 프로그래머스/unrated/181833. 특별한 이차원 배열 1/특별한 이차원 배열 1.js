function solution(n) {
    let answer = [];
    for(let i =0; i < n ; i++){
        let nowArray = Array(n).fill(0);
        nowArray[i] = 1;
        answer.push(nowArray);
    }
    return answer;
}