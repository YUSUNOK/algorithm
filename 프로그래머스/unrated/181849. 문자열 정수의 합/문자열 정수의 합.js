const solution = (num_str) => {
    let answer = 0;
    for(let str of num_str) {
        answer += Number(str);
    }
    return answer;
}