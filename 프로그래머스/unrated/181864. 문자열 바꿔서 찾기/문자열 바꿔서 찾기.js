function solution(myString, pat) {
    return [...myString].map((x) => x === 'A' ? x = 'B' : x = 'A').join("").includes(pat) ? 1 : 0;
}