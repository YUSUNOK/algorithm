const solution = (arr) => {
    let answer = [arr[0]];
    for(let i=1; i< arr.length; i++) {
        const compareItem = answer[answer.length-1];
        if(arr[i] != compareItem) {
            answer.push(arr[i]);
        }
    }
    return answer;
}