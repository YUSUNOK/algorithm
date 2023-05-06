function solution(array) {
    if(array.length === 1) return array[0];
    const countObj ={};
    for(let num of array){
        countObj[num] = (countObj[num] || 0) + 1;
    };
    const maxValue = Math.max(...Object.values(countObj));
    const firstIndex = Object.values(countObj).indexOf(maxValue);
    const lastIndex = Object.values(countObj).lastIndexOf(maxValue);
    if(firstIndex !== lastIndex) return -1;
    for(let [num, value] of Object.entries(countObj)){
        if(value === maxValue){
            return Number(num);
        }
    }
}