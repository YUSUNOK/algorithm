const solution = (food) => {
    let leftResult = '';
    food.forEach((x, i) => {
        if(i >= 1) {
         leftResult += `${i}`.repeat(Math.floor(x/2));
        }
    });
   let rightResult = [...leftResult].reverse().join('');
   return leftResult + '0' + rightResult;
}