const solution = (sides) => {
    const smallValue = Math.min(...sides);
    return 2 * smallValue - 1;
}