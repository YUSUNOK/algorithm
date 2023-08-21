const solution = (s) => {
    let upperArr = [...s.toUpperCase()];
    const pCount = upperArr.filter(x => x === 'P').length;
    const yCount = upperArr.filter(x => x === 'Y').length;
    return pCount === yCount;
}