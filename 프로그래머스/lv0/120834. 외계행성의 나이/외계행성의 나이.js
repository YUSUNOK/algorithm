function solution(age) {
    return [...String(age)].map(x => String.fromCharCode(x.codePointAt() + 49)).join("");
}


