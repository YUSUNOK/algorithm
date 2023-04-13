function solution(my_string, n) {
    var answer = '';
 [...my_string].map(x => answer+=x.repeat(n)) ;
    return answer;
}