function solution(cipher, code) {
    var answer = "";
    const n = ~~(cipher.length / code);
    for(let i = 1; i <= n ; i++){
        answer += cipher[code * i -1];
    }
    return answer;
}
