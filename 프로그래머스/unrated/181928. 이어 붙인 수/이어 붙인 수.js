function solution(num_list) {
    const odd = parseInt(num_list.filter(x => x % 2 === 1).join(""));
    const even = parseInt(num_list.filter(x => x % 2 === 0).join(""));
    return odd + even;
}