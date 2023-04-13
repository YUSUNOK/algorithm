function solution(numbers) {
    var answer = 0;
     answer = numbers.sort((a,b) => a - b)[numbers.length - 1] * numbers[numbers.length - 2];
    return answer;
}