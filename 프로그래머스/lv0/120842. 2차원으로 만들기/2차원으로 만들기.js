const solution = (num_list, n) => {
    let answer = [];
    const runCount = num_list.length / n;
    for(let i = 0 ; i < runCount; i++)
        answer.push(num_list.splice(0, n));
    return answer;
}