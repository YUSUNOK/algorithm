function solution(my_string) {
    let [answer, removeSpaceArray, PMIndex] = [0,0,[]];
    removeSpaceArray = my_string.split(" ");
    let filterNumber = removeSpaceArray.filter((x, i) => {
        if(x === '+'){
            PMIndex.push('+');
        }else if(x === '-'){
            PMIndex.push('-');
        }else{
            return x;
        }
    })
    answer += Number(filterNumber.shift());
    PMIndex.map((x, i) => x === '+' ? answer += Number(filterNumber[i]) : answer -= Number(filterNumber[i])
    )
    return answer;
}