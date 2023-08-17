const solution = (num_list) => {
    const gopValue = num_list.reduce((prev, curr) => prev * curr, 1);
    const hapValue = num_list.reduce((prev, curr) => prev + curr, 0);
    return gopValue < hapValue ** 2 ? 1 : 0;
}