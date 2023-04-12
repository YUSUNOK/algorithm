function solution(numbers) {
    var answer = numbers.reduce( (prev, curr) => prev + curr ) / numbers.length;
    return answer;
}