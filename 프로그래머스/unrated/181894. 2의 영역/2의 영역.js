function solution(arr) {
    const startIndex = arr.indexOf(2);
    if(startIndex === -1){
        return [-1];
    }
    const endIndex = arr.lastIndexOf(2);
    if(startIndex === endIndex){
        return [2];
    }else{
       return arr.splice(startIndex, endIndex - startIndex + 1);
    }
}