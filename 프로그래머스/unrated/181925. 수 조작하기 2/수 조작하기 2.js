function solution(numLog) {
    let answer = '';
    const mathObj = {
        '1' : 'w',
        '-1' : 's',
        '10' : 'd',
        '-10' : 'a'
    }
    for(let i = 1; i <= numLog.length - 1 ; i++){
        const index = String(numLog[i] - numLog[i - 1]);
        answer += mathObj[index];
    }
    return answer;
}