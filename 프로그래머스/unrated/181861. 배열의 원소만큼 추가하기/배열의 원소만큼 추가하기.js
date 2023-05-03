function solution(arr) {
    var answer = [];
    for(let number of arr){
        for(let i =0; i < number; i++){
            answer.push(number)
        }
    }
    return answer;
}