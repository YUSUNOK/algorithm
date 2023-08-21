const solution = (s) => {
    return [...s].sort((x, y) => {
        if(x > y) return -1;
        else if(y > x) return 1;
        return 0;
    }).join('');
}