function solution(common) {
    let differentValueList = [];
    for(let i = 0 ; i < common.length - 1 ; i++){
        differentValueList.push(common[i+1] - common[i]);
    }
    const differentValueCount = new Set(differentValueList);
    return differentValueCount.size === 1 ? common[common.length - 1] + differentValueList[0] : common[common.length - 1] * (common[1] / common[0]);
}