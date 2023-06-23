const solution = (num_list) => {
    let result = [0,0];
    num_list
    .map(x => result[x%2] += 1);
    return result;
}