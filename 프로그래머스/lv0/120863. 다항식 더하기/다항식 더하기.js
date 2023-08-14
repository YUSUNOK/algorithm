const solution = (polynomial) => {
    let coefficientX = 0;
    let constant = 0;
    
    polynomial.split(' + ').forEach((element) => {
        if(element.includes('x')) {
           coefficientX += Number(element.replace('x', '')) || 1;
        }else{
            constant += Number(element);
        }
    })

    let plus = '';
    if(coefficientX !== 0 && constant !== 0) plus = ' + ';
    let aboutX = coefficientX === 0 ? '' : coefficientX === 1 ? 'x' : `${coefficientX}x`;
    let result = [aboutX, plus, constant === 0 ? '' : constant];
    return result.join('');
}