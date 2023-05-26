function solution(quiz) {
    let answer = [];
    for(let query of quiz) {
        const [plusMinus, result] = query.split(" = ");
        if(plusMinus.includes(" - ")){
            const [a, b]= plusMinus.split(" - ");
            (Number(a) - Number(b) === Number(result)) ? answer.push("O") : answer.push("X");
        }else{
            const [a, b]= plusMinus.split(" + ");
            (Number(a) + Number(b) === Number(result)) ? answer.push("O") : answer.push("X");
        }
    }
    return answer;
}