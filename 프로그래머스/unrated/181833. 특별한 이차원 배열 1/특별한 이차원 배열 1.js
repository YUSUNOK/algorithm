const solution = (n) => {
    let answer = [];
    for(let i = 0; i < n; i++) {
        let inputArr = Array(n).fill(0).map((x, j)=> {
            return j === i ? 1:x;
                return 1;
        })
        answer.push(inputArr);
    }
    return answer;
}