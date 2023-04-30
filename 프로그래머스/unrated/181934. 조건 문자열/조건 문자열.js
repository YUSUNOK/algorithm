function solution(ineq, eq, n, m) {
    let answer = 0;
    if(eq === '='){
        answer = ineq === '>' ? n >= m : n <= m; 
    }else{
         answer = ineq === '>' ? n > m : n < m; 
    }
    return Number(answer);
}