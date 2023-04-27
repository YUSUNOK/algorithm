function solution(n, control) {
    const obj = {
        "w" : 1,
        "s" : -1,
        "d" : 10,
        "a" : -10,
    };
    
    for(let char of control){
        n += obj[char];
    }
    return n;
}