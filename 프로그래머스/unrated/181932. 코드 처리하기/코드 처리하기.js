function solution(code) {
    let answer = "";
    let mode = false;
    for(let i = 0; i < code.length ; i++){
        if(code[i] === '1'){
            mode = !mode;
            continue;
        }
        if(!mode && i % 2 === 0){
            answer += code[i];
        }
        if(mode && i % 2 === 1){
            answer += code[i];
        }
    }
    return answer.length ? answer : 'EMPTY';
}