// 문자열의 길이 -1 번 순회해도 b와 동일하지 않으면 -1 
const solution = (A, B) => {
    let arrOfA = [...A];
    if(arrOfA.join('') === B) return 0;
    for(let i = 1; i <= A.length - 1; i++) {
        arrOfA.splice(0, 0, arrOfA.pop());
       if(arrOfA.join('') === B) {
           return i;
       }
    }
    return -1;
}