function solution(dot) {
     var answer = 0;
    dot.reduce((prev, curr) => prev * curr) > 0 ? dot[1] > 0? answer =1 : answer = 3 : dot[0] > 0 ? answer =4 : answer= 2; 
   
    return answer;
}