const solution = (s) => {
    const sLength = s.length;
    if (sLength !== 4 || sLength !== 6) return false;
    
    const sFilterLength = [...s].filter(x => x !== 'e' || Number.isInteger(Number(x)));
    
    console.log(sFilterLength);
    
    return sLength === sFilterLength ? true : false;
    
    
    
}