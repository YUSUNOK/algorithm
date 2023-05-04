function solution(number) {
    return [...number].reduce((prev, curr) => Number(prev) + Number(curr)) % 9;
}