function solution(arr) {
    let answer = 0;
    let nowArr = arr;
    while(true){
        let [a,b] = [0,0];
        for(let i = 0; i < nowArr.length; i++) {
            if(nowArr[i] > 50 && nowArr[i] % 2 === 0){
                a++;
                nowArr[i] = nowArr[i] / 2;
            }
            if(nowArr[i] < 50 && nowArr[i] % 2 !== 0){
                b++;
                nowArr[i] = nowArr[i] * 2 + 1;
            }
        }
        // 50보다 크면서 짝수(a), 50보다 작으면서 홀수(b)인 것이 없으면 반복문 빠져나와서 값을 리턴한다.
        if(!a && !b) return answer;
        answer++;
    }
}