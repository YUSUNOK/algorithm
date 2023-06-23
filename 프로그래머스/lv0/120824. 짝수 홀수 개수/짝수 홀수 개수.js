const solution = (num_list) => {
    let result = [0,0];
    num_list
    .map(x => x % 2 === 0 ? result[0] += 1 : result[1]+= 1);
    return result;
}