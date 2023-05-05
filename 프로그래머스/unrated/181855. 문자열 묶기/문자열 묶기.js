function solution(strArr) {
    let lengthObj = {};
    for(let str of strArr){
        lengthObj[str.length] = (lengthObj[str.length] || 0) + 1;
    }
    return Math.max(...Object.values(lengthObj));
}