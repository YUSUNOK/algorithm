const solution = (absolutes, signs) => {
    return absolutes.reduce((prev, curr, i) => {
        const isMinus = !signs[i];
        return isMinus ? prev - curr : prev + curr
    }, 0);
}