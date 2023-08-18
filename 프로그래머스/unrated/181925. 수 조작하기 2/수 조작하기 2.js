const solution = (log) => {
    let answer = '';
    const calculationMap = new Map([
        [1, 'w'], 
        [-1, 's'],
        [10, 'd'],
        [-10, 'a']
    ]);
    
    for(let i = 0; i < log.length - 1; i++) {
        let myKey = log[i+1] - log[i];
        answer += calculationMap.get(myKey);
    }
    return answer;
}