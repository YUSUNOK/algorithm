function solution(binomial) {
    const [a, op, b] = binomial.split(" ");
    const formulaObj = {
        '+' : parseInt(a) + parseInt(b),
        '-' : parseInt(a) - parseInt(b),
        '*' : parseInt(a) * parseInt(b),
    }
    return formulaObj[op];
}