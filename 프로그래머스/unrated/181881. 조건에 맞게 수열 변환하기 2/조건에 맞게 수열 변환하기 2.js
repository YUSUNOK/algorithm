function solution(arr) {
    let answer = 0;
    while(true){
        let [a,b] = [0,0];
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] > 50 && arr[i] % 2 === 0){
                a++;
                arr[i] = arr[i] / 2;
            }
            if(arr[i] < 50 && arr[i] % 2 !== 0){
                b++;
                arr[i] = arr[i] * 2 + 1;
            }
        }
        // 50보다 크면서 짝수(a), 50보다 작으면서 홀수(b)인 것이 없으면 반복문 빠져나와서 값을 리턴한다.
        if(!a && !b) return answer;
        answer++;
    }
}