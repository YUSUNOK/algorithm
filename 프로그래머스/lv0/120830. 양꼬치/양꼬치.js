function solution(n, k) {
     
    var answer = (k - parseInt(n/10)) * 2000 + n * 12000 ;
    return answer;
}