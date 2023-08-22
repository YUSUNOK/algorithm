const solution = (arr) => {
    let answer = [arr[0]];
    let preValue = arr[0];
    for(let i=1;i < arr.length; i++) {
        if(arr[i] !== preValue) {
            answer.push(arr[i])
            preValue = arr[i];
        }
    }
    return answer;
}