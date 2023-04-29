function solution(num_list) {
    const odd_sum = num_list.filter((x, i) => i % 2 === 0).reduce((prev, curr) => prev + curr);
    const even_sum = num_list.filter((x, i) => i % 2 === 1).reduce((prev, curr) => prev + curr);
    return Math.max(odd_sum, even_sum);
}