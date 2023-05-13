function solution(n) {
    let answer = 0;
    for(let i = 4 ; i <= n ; i++){
        let count = 0;
        for(let j = 1; j <= Math.sqrt(i) ; j++) {
            if(j === Math.sqrt(i) && i % j === 0){ count += 1;}
            if(i % j === 0){ count += 2;}
        }
        if(count >= 3){ answer += 1;}
    }
    return answer;
}