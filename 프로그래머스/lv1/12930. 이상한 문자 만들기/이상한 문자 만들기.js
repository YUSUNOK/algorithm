const solution = (s) => {
    const wordsArr = s.split(' ');
    const changeUpDownArr = wordsArr.map((word) => {
        return [...word].map((str, i) => {
            if(i % 2 === 0) {
                return str.toUpperCase();
            }else {
                return str.toLowerCase();
            }
        }).join('');
    })
    
    return changeUpDownArr.join(' ');
}