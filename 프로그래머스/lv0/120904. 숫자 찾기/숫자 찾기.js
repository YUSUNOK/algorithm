const solution = (num, k) => {
    const result = [...String(num)].indexOf(String(k));
    return result < 0 ? result : result + 1;
}
