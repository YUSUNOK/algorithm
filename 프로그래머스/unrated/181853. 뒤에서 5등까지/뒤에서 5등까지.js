function solution(num_list) {
    return num_list.sort((x, y) => x - y).splice(0, 5);
}