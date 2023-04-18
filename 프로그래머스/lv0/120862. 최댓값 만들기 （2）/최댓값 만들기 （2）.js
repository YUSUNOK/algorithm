function solution(numbers) {
    numbers.sort((x,y) => x - y);
    return Math.max(numbers[0] * numbers[1] , numbers[numbers.length -1] * numbers[numbers.length -2]);
}