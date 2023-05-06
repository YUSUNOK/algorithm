function solution(s) {
    const answer = [...s].sort((a, b) => {
        if(a > b) return -1;
        if(a < b) return 1;
        if(a === b) return 0;
    }).join("");
    return answer;
}