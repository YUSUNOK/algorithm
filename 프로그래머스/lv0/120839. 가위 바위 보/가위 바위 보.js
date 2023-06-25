const solution = (rsp) => {
    const mapToWin = new Map([['2', '0'], ['0', '5'], ['5', '2']]);
    return [...rsp].map(x => mapToWin.get(x)).join('');
}