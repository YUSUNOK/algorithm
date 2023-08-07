const solution = (numbers, k) => {
    const index = 2*(k-1);
    return numbers[index % numbers.length];
}