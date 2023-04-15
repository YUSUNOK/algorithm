function solution(sides) {
    var answer =0;
    sides.sort((x,y) => y-x)[0] < sides[1] + sides[2] ? answer =1 : answer =2;
    
    return answer;
}