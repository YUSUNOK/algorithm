const solution = (num_list) => {
    const oddSum = num_list.filter((x, i) => i % 2 === 0).reduce((prev, curr) => prev + curr, 0);
    const evenSum = num_list.filter((x, i) => i % 2 !== 0).reduce((prev, curr) => prev + curr, 0);
    return oddSum > evenSum ? oddSum : evenSum;
}