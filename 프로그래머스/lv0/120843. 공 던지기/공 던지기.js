const solution = (numbers, k) => {
    let index = 0;
    for(let i = 1; i <= k ; i++) {
        if(i === 1) continue;
        index+=2;
        if(index - (numbers.length - 1) === 1){
            index = 0;
        }
         if(index - (numbers.length - 1) === 2){
            index = 1;
        }
    }
    return numbers[index];
}