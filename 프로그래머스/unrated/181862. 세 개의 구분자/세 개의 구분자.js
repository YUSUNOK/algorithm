function solution(myStr) {
    const result = myStr.replaceAll(/[abc]/g, ".").split('.').filter(x => x);
    return result.length === 0 ? ["EMPTY"] : result ;
}