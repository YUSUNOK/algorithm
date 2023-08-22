const solution = (number) => {
    let count = 0;
    number.sort((x,y) => x-y);
    for(let i = 0; i < number.length -1; i++) {
        let findSum = -number[i];
        for(let leftIndex = i+1; leftIndex < number.length-1; leftIndex++) {
            let rightIndex = number.length-1;
            while(leftIndex < rightIndex) {
                let nowSum = number[leftIndex] + number[rightIndex];
                if(nowSum > findSum) {
                    --rightIndex;
                } else if(nowSum === findSum){
                    ++count;
                    --rightIndex;
                } else if(nowSum < findSum) {
                    break;
                }
            }
        }
    }
    return count;
}