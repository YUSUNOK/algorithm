const solution = (l, r) => {
    let result = [];
    for(let num = l; num <= r; num++) {
       let numArr = [...String(num)];
       let filterNumArr = numArr.filter((x) => ['0', '5'].includes(x));
        if(numArr.length === filterNumArr.length){
            result.push(num);
        }
    }
   return result.length === 0 ? [-1] : result;
}