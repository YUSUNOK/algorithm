const solution = (d, budget) => {
    d.sort((x, y) => x - y);
    return d.reduce((prev, curr) => {
        if(budget >= curr) {
            budget -= curr;
            return prev+1;
        }else {
            return prev;
        }
    }, 0);
}