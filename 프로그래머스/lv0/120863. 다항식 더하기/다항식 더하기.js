const solution = (polynomial) => {
    let coefficientX = 0;
    let constant = 0;
    
    let result = '';
    polynomial.split(' + ').forEach((element) => {
        if(element.includes('x')) {
           coefficientX += Number(element.replace('x', '')) || 1;
        }else{
            constant += Number(element);
        }
    })
    
    switch(coefficientX) {
        case 0: 
            break;
        case 1:
            result += 'x';
            break;
        default:
            result += `${coefficientX}x`;
    }
    
    if(coefficientX !== 0 && constant !== 0) result += ' + ';
    if(constant !== 0)result += `${constant}`;
    
    return result;
}