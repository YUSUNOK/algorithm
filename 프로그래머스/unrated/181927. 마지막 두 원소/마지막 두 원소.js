function solution(num_list) {
    const lastIndex = num_list.length - 1;
    const lastValue = num_list[lastIndex];
    const preLastValue = num_list[lastIndex - 1];
    lastValue > preLastValue ? num_list.push(lastValue - preLastValue) : num_list.push(lastValue * 2);
    return num_list;
}