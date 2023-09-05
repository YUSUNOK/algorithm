const solution = (s) => {
    const upperCaseArrOfS = Array.from(s.toUpperCase());
    const countP = upperCaseArrOfS.filter(x => x === 'P').length;
    const countY = upperCaseArrOfS.filter(x => x === 'Y').length;
    
    return countP === countY;
}