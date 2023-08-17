const solution = (myString, pat) => {
    let afterChanging = '';
    const changeAB = {
        'A': 'B',
        'B': 'A',
    }
    for(let str of myString) {
       afterChanging += changeAB[str];
    }
    return afterChanging.includes(pat) ? 1 : 0;
}