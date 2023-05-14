function solution(my_string) {
    let answer = "";
    const onlyOneMap = new Map();
    for(let str of my_string){
        if(!onlyOneMap.has(str)){
            onlyOneMap.set(str,1)
        }
    }
    const iterator = onlyOneMap.keys();
    for(let i of iterator){
        answer += i;
    }
    return answer;
}