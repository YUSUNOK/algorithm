function solution(array) {
    let countArr = Array(Math.max(...array) + 1).fill(0);
    array.map(x => countArr[x] += 1);
    const maxValue = Math.max(...countArr);
    let maxCount = 0;
    countArr.forEach(x => x === maxValue ? maxCount +=1 : "");
    if(maxCount > 1){
        return -1 ;
    }
    else{
        return countArr.indexOf(maxValue);
    }
}