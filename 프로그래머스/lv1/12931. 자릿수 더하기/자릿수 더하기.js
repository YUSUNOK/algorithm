const solution = (N) => {
    let answer = 0;
    while(N !== 0) {
        answer += N % 10;
        N = Math.floor(N/10);
    }
    return answer;
}