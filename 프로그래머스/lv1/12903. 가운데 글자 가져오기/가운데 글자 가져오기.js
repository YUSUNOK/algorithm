const solution = (s) => {
    const findIndex = Math.floor(s.length / 2);
    const isEven = s.length % 2 === 0;
    return isEven ? s.slice(findIndex -1, findIndex +1) : s[findIndex];
    
}