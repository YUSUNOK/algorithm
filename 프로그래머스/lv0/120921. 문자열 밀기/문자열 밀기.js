function solution(A, B) {
    const aArr = [...A];
    const bArr = [...B];
    let count = 0;
    if(A === B) return 0;
    for(let i = 0 ; i < aArr.length - 1 ; i++) {
        aArr.unshift(aArr.pop());
        count += 1;
        if(aArr.join("") === B) return count;
    }
    return -1;
}