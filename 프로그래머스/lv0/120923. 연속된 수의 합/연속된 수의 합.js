function solution(num, total) {
    var answer = [];
    var n = 0;
    var start = 0;
    var end = 0;
    if(num % 2 === 1){
       n = total / num ;
        start = n - ~~(num / 2);
        end = n + ~~(num /2);
    }
    else{
        var sum =0;
        for(let i = 1; i <= num -1; i ++){
            sum += i;
        }
        start = (total - sum) / num;
        end = start + num -1;
    }
    for(let i = start ; i <= end ; i ++){
        answer.push(i);
    }
    return answer;
}