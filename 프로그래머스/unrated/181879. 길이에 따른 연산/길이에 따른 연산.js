const solution = (num_list) => {
    return num_list.length >= 11 ? num_list.reduce((prev, curr) => prev + curr, 0) : num_list.reduce((prev, curr) => prev * curr, 1);
}