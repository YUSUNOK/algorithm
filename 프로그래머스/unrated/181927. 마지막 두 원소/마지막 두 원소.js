const solution = (num_list) => {
    const lastValue = num_list[num_list.length - 1];
    const afterLastValue = num_list[num_list.length -2];
    lastValue > afterLastValue ? num_list.push(lastValue - afterLastValue) : num_list.push(lastValue * 2);
    return num_list;
}