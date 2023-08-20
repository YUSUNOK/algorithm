const solution = (arr) => {
    const row = arr.length;
    const column = arr[0].length;
    if(row > column) {
        arr = arr.map((x) => [...x, ...Array(row-column).fill(0)]);
    }else{
        for(let i = 0; i <column - row; i++) {
            arr.push(Array(column).fill(0));
        }
    }
    return arr;
}