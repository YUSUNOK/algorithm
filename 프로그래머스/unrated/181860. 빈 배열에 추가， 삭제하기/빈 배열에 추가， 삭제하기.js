const solution = (arr, flag) => {
    let X = [];
    flag.forEach((booleanValue, i) => {
        if(booleanValue) {
            X.push(...Array(arr[i]*2).fill(arr[i]));
        }else{
           X = X.slice(0, X.length - arr[i]);
        }
    })
    return X;
}