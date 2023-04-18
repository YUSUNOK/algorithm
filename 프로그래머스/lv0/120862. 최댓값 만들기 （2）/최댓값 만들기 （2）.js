function solution(numbers) {
    numbers.sort((x,y) => x - y);
    return numbers[0] * numbers[1] > numbers[numbers.length -1] * numbers[numbers.length -2] ? numbers[0] * numbers[1] : numbers[numbers.length -1] * numbers[numbers.length -2];
}