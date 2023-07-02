const solution = (i, j , k) => {
    let sequenceStr = '';
    for(let item = i ; item <= j ; item++)
        sequenceStr += item;
    return sequenceStr.split(k).length - 1;
}