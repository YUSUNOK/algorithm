const solution = (arr) => {
    let count = 0;
    while(true) {
        let beforeSameElementCount = 0;
        for(let i = 0; i < arr.length ; i++) {
            if(arr[i] >= 50 && arr[i] % 2 === 0){
                arr[i] /= 2;
            }else if(arr[i] < 50 && arr[i] % 2 === 1) {
                arr[i] = arr[i] * 2 + 1;
            }else{
                beforeSameElementCount++;
            }
        }
        if(beforeSameElementCount === arr.length) break;
        count++;
    }
    return count;
}