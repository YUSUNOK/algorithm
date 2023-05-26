function solution(n) {
    let list = [];
    for(let i = 2; i <= n ; i++) {
        if(n % i === 0){
            list.push(i);
            while(n % i === 0){
                n = n/i;
            }
        }
    }
    return list;
}