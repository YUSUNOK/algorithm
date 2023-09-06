const solution = (n) => {
    const strReverseN = [...n.toString(3)].reverse().join('');
    return Number.parseInt(strReverseN, 3);
}