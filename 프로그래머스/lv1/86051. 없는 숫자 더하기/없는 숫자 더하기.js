const solution = (numbers) => {
    const totalSum = 9 * 10 / 2;
    const numbersSum = numbers.reduce((prev, curr) => prev + curr, 0);
    return totalSum - numbersSum;
}