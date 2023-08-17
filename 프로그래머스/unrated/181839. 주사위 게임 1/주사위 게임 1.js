const solution = (a, b) => {
    const oddCount = [a, b].filter((x) => x % 2 === 1).length;
    switch (oddCount) {
        case 0: return Math.abs(a-b);
        case 1: return 2 * (a + b);
        case 2: return a ** 2 + b ** 2;
    }
}