function solution(num_list) {
    const booleanNum_list = num_list.map(x => x < 0);
    return booleanNum_list.includes(true) ? booleanNum_list.indexOf(true) : -1;
}