function solution(myString) {
    return [...myString].map((x) => ['a', 'A'].includes(x) ? 'A' : x.toLowerCase()).join("");
}