const solution = (x) => {
    const sumValue = [...String(x)].reduce((prev, curr) => prev + Number(curr), 0);
    return x % sumValue === 0 ? true : false;
}