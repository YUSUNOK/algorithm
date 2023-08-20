const solution = (arr) => {
    let newArrLength = 1;
    while(arr.length > newArrLength) {
        newArrLength *= 2;
    }
    arr.push(...Array(newArrLength-arr.length).fill(0));
    return arr;
}