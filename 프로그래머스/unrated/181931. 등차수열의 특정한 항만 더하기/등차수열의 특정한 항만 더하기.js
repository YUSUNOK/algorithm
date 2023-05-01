function solution(a, d, included) {
    const indexListToSum =included.map((x, i) => x === true ? i : "").filter((x) => x !== "");
    let answer = 0;
    indexListToSum.forEach(x => answer += a +(x * d));
    return answer ;
}