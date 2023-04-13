function solution(array, n) {
    array.sort((x, y) => x - y);
    var answer = array.includes(n) ? array.lastIndexOf(n) - array.indexOf(n) + 1 : 0;
    return answer;
}