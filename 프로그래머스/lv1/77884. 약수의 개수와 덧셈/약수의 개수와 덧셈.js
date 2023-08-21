const numberOfDivisors = (x) => {
   return Array(x).fill(1).map((x, i) => x+i).filter((number) => x % number === 0).length;
}

const solution = (left, right) => {
    let answer = 0;
    for(let i =left; i<= right; i++) {
        numberOfDivisors(i) % 2 === 0 ? answer += i : answer -= i;
    }
    return answer;
}