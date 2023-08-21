const solution = (s) => {
    const strLength = s.length;
    const allNumberBoolean = [...s].filter((x) => Number.isInteger(Number(x))).length === s.length;
    return allNumberBoolean && (strLength === 4 || strLength === 6);
}