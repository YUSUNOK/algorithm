function solution(my_string) {
    // 97 ~ 122(소문자), 65~90(대문자)
    const countMap = new Map();
    let result = Array(52).fill(0);
    for(let str of my_string){
        countMap.set(str, (countMap.get(str) || 0) + 1);
    }
    for(let [alpha, countNum] of [...countMap]) {
        alpha.charCodeAt() <= 90 ? result[alpha.charCodeAt() - 65] = countNum :  result[alpha.charCodeAt() - 97 + 26] = countNum;
    }
    return result;
}