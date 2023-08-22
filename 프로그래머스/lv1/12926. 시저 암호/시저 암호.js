const solution = (s,n) => {
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const upperCase = lowerCase.toUpperCase();
    return [...s].map((x) => {
        if(x === ' ') return x;
        let isUpper = lowerCase.indexOf(x) === -1;
        let index = isUpper ? upperCase.indexOf(x) : lowerCase.indexOf(x);
        let newIndex = (index + n) % 26;
        return isUpper ? upperCase[newIndex] : lowerCase[newIndex];
    }).join('');
}