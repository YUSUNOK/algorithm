const solution = (polynomial) => {
    let coefficientA = 0;
    let constant = 0;
    
    let polynomialArr = polynomial.split(' + ');
    
    for(let element of polynomialArr) {
        if(element.includes('x')) {
            element = element.replace('x', '');
            element === '' ? coefficientA += 1 :  coefficientA += Number(element);
        }else{
            constant += Number(element);
        }
    }
    let aboutX;
    switch(coefficientA) {
        case 0: aboutX = ''; break;
        case 1: aboutX = 'x'; break;
        default : aboutX = `${coefficientA}x`; break;
    }
    
    let resultArr = [aboutX, String(constant)];

    if(resultArr[1] === '0') resultArr.pop();
    
    if(resultArr.length === 2 && aboutX !== ''){
        resultArr.splice(1, 0, ' + ');
    }
    return resultArr.join('');
}
