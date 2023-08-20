const solution = (my_string) => {
    let my_stringArr = [...my_string];
    const alphabetCountMap = new Map();
    for(let alphaNumber = 65; alphaNumber <= 90; alphaNumber++) {
        alphabetCountMap.set(String.fromCharCode(alphaNumber), my_stringArr.filter((x) => x === String.fromCharCode(alphaNumber)).length);
    }
    for(let alphaNumber = 97; alphaNumber <= 122; alphaNumber++) {
        alphabetCountMap.set(String.fromCharCode(alphaNumber), my_stringArr.filter((x) => x === String.fromCharCode(alphaNumber)).length);
    } 
    return [...alphabetCountMap].map((x) => x[1]);
}