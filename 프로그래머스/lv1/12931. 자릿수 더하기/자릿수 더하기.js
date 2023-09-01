const solution = (N) => {
    let answer = 0;
    const loop = String(N).length;
    for(let i = 0; i < loop ; i++) {
        answer += N % 10;
        N = Math.floor(N/10);
    }
    return answer;
}