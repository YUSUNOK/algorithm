const solution = (arr) => {
    if(arr.length === 1) return [-1];
    let smallValueAndIndex = [arr[0], 0];
    for(let i = 1; i < arr.length; i++) {
        if(smallValueAndIndex[0] > arr[i]) {
            smallValueAndIndex = [arr[i], i];
        }
    }
    arr.splice(smallValueAndIndex[1], 1);
    return arr;
}