function solution(arr) {
    let answer = [...arr];
    let smallLength = 1;
    while (arr.length > smallLength) {
        smallLength = smallLength * 2;
    }

    for(let i = 0; i < smallLength - arr.length ; i++) {
        answer.push(0);
    }
    return answer;
}