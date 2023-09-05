const solution = (n) => { 
    let answer = [];
    let newArr = [...String(n)]; 
    for(let i = 0; i < String(n).length; i++) {
        answer.push(Number(newArr.pop()));
    }
    return answer;
}