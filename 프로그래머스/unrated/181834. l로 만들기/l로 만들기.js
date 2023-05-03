function solution(myString) {
    // myString.replaceAll(/[a-k]/g, 'l')
    return [...myString].map((x) => x < 'l' ? 'l' : x).join("");
}