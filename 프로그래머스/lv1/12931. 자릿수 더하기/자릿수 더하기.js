const solution = (N) => {
    return [...String(N)].reduce((prev, curr) => prev + Number(curr), 0);
}