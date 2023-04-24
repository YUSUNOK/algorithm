function solution(a, b) {
    const oddCount = Number(a % 2) + Number(b % 2);
    const resultObject ={
        0 : Math.abs(a-b),
        1 : 2 * (a + b),
        2 : a ** 2 + b ** 2,
    }
    return resultObject[oddCount];
}