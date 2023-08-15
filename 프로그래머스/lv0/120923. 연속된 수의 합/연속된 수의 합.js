const solution = (num, total) => {
    const result = [];
    let x = (total - (num * (num - 1) / 2)) / num;
    for(let i = x; i <= num + x - 1; i++) {
        result.push(i);
    }
    return result;
}