const solution = (t, p) => {
    // 뽑아내는 수의 마지막인덱스 : p.length -1 ~ 끝까지
    // 각각의 수의 첫번째 인덱스 : 마지막인덱스 - (p.length - 1)
    let result = 0;
    for(let selectNumberLastIndex = p.length -1; selectNumberLastIndex < t.length; selectNumberLastIndex++) {
        let selectNumberFirstIndex = selectNumberLastIndex - (p.length -1);
        if(Number(t.slice(selectNumberFirstIndex, selectNumberLastIndex+1)) <= Number(p)) result+=1;
    }
    return result;
}