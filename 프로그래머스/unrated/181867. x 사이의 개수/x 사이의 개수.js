function solution(myString) {
    return myString.split("x").map((x) => x === '' ? 0 : x.length);
}