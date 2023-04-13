function solution(num_list) {
    var answer = Array(2).fill(0);
    num_list.forEach(x => x % 2 === 0 ? answer[0]+=1 : answer[1]+=1);
    return answer;
}