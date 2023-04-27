function solution(rny_string) {
    return [...rny_string].map(x => x === 'm' ? x = 'rn' : x).join("");
}