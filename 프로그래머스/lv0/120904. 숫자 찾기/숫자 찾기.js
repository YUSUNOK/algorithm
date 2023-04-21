function solution(num, k) {
    const numArr = [...String(num)].map(x => +x);
    return numArr.includes(k) ? numArr.indexOf(k) + 1 : -1;
}