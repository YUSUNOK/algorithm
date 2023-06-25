const solution = (numbers) => {
    numbers.sort((x,y) => x-y);
    const lastNumbers= numbers.slice(-2);
    return Math.max(numbers[0] * numbers[1], lastNumbers[0] * lastNumbers[1]);
}