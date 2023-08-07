const solution = (spell, dic) => {
    const checkWord = spell.sort().join('');
    return dic.map(x => [...x].sort().join('')).includes(checkWord) ? 1:2;
}