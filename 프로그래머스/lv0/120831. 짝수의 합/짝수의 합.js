const solution = (n) => {
    const arrLength = Math.trunc(n/2) + 1;
    return Array(arrLength)
            .fill(0).map((x, i) => 2*i)
            .reduce((prev, curr) => prev + curr);
}