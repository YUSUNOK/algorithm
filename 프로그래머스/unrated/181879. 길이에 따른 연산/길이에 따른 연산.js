function solution(num_list) {
    return num_list.length >= 11 ? num_list.reduce((prev, curr) => prev + curr) : num_list.reduce((prev, curr) => prev * curr);
}