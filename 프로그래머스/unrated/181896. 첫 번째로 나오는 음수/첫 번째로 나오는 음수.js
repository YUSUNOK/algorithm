function solution(num_list) {
   // 조건에 부합하는 첫번째 인덱스를 추출 : findIndex
    return num_list.findIndex((x) => x < 0);
}