const solution = (absolutes, signs) => {
    return absolutes.reduce((prev, curr, i) => {
        if(!signs[i]) curr = -curr;
        return prev + curr;
    }, 0);
}