function solution(left, right) {
    let answer = 0;
    const mathematicalFactorsCount = {};
    for(let i = left ; i <= right; i ++){
        for(let j = 1 ; j<= Math.sqrt(i) ; j++){
            if(i % j !== 0) continue;
            let plusValue = ~~(i / j) === j ? 1 : 2;
             mathematicalFactorsCount[i] = (mathematicalFactorsCount[i] || 0) + plusValue;
        }
    }
    for(let number in mathematicalFactorsCount){
        mathematicalFactorsCount[number] % 2 === 0 ? answer += Number(number) : answer -= Number(number);
    }
    return answer;
}