const solution = (order) => {
    const set369 = new Set(['3', '6', '9']);
    return [...String(order)].filter(x => set369.has(x)).length;
}
