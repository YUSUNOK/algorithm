function solution(numbers) {
    return Array(10).fill(0).map((x, i) => x + i).filter((x) => !numbers.includes(x)).reduce((prev, curr) => prev + curr);
}