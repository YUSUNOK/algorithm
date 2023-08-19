const solution = (intStrs, k, s, l) => {
    let answer = [];
    for(let intStr of intStrs) {
       let filterNumber = Number(intStr.substring(s, s+l));
       if(filterNumber > k) {
           answer.push(filterNumber);
       }
    }
    return answer;
}