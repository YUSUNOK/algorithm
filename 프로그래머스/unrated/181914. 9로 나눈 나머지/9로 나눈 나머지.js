function solution(number) {
    return [...number].map(x => Number(x)).reduce((prev, curr) => prev + curr) % 9;
}