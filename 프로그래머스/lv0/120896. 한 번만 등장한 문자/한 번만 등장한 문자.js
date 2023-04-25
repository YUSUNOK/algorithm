function solution(s) {
   const countArr = Array(26).fill(0);
    [...s].forEach(x => countArr[x.codePointAt() - 97] +=1);
    const indexArr = countArr.map((x,i)=> x === 1 ? i : -1).filter(x => x > -1);
    return indexArr.map(x => String.fromCharCode(x + 97)).join("");
}