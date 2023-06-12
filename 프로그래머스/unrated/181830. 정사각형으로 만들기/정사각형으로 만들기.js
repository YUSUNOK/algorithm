function solution(arr) {
    const row = arr.length;
    const column = arr[0].length;
    if(row > column) {
        for(let item of arr){
            item.push(...Array(row-column).fill(0))
        }
    }else{
        const arrToPush = arr[0].map(x => 0);
        for(let i =0; i <column-row ; i++){
            arr.push(arrToPush);
        }
    }
   return arr;
}