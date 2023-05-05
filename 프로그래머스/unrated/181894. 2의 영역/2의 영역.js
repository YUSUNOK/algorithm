function solution(arr) {
    const startIndex = arr.indexOf(2);
    const endIndex = arr.lastIndexOf(2);
    return startIndex === -1 ? [-1] : arr.splice(startIndex, endIndex - startIndex + 1);
}