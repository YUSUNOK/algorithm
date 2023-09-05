const solution = (n) => {
    return Number([...String(n)].sort((x, y) => {
        if (Number(x) < Number(y)) { 
            return 1;
        }else if(Number(x) > Number(y)) {
            return -1;
        }
        return 0;
    }).join(''));
}