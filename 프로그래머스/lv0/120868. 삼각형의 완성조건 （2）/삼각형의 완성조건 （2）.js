function solution(sides) {
    const [a, b]  = sides ;
    const inputMax = Math.max(a,b) ;
    const inputRemain = a + b - inputMax ;
    // 가장 긴 변이 들어왔을 때  --> inputMax - inputRemain <  x <= inputMax x의 개수 : inputRemain
    // 가장 긴 변이 포함되어있지 않았을 때  inputRemain -1 개 
    return 2 * inputRemain -1;
}