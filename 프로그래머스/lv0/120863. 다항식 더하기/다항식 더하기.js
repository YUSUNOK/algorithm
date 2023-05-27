function solution(polynomial) {
    let answerString = '';
    const resultMap = new Map();
    resultMap.set('x', 0);
    resultMap.set('constant', 0);
    const list = polynomial.split(' + ');
    for(let item of list) {
        if(item.includes('x')) {
            item.slice(0, -1) === '' ? resultMap.set('x', resultMap.get('x') + 1) : resultMap.set('x', resultMap.get('x') + Number(item.slice(0, -1)));
        }else{
            resultMap.set('constant', resultMap.get('constant') + Number(item));
        }
    }
    if(resultMap.get('x') !== 0){
        if(resultMap.get('x') === 1){
             answerString += 'x';
        }else{
            answerString += `${resultMap.get('x')}x`;
        }
    }
    
    if(resultMap.get('constant') !== 0){
        if(answerString.includes('x')){
            answerString += ' + ';
        }
        answerString += `${resultMap.get('constant')}`;
    }
    return answerString;
}

console.log(solution("x"));