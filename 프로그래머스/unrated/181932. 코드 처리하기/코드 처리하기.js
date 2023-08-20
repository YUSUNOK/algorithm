const solution = (code) => {
    let ret = '';
    let mode = 0;
    for(let idx = 0; idx< code.length; idx++) {
        if(code[idx] === '1') {
            mode = 1 - Math.abs(mode);
            continue;
        }
        if(mode === 0 && idx % 2 === 0) ret += code[idx];
        if(mode === 1 && idx % 2 !== 0) ret += code[idx];
    }
    return ret === '' ? 'EMPTY' : ret;
}