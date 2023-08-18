const solution = (binomial) => {
    const binomialArr = binomial.split(' ');
    switch(binomialArr[1]) {
        case '+' : return Number(binomialArr[0]) + Number(binomialArr[2]); 
        case '-' : return Number(binomialArr[0]) - Number(binomialArr[2]); 
        default : return Number(binomialArr[0]) * Number(binomialArr[2]); 
    }
}