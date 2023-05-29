function solution(a, b, c, d) {
    const inputList = [a,b,c,d];
    const obj = {};
    for(let item of inputList) {
        obj[item] = ( obj[item] || 0) + 1;
    }
    if(Object.entries(obj).length === 1){
        return 1111 * Object.entries(obj)[0][0];
    }
    if(Object.entries(obj).length === 4){
        return Math.min(...Object.keys(obj));
    }
    if(Object.entries(obj).length === 3){
      return Object.entries(obj).filter(([x, y]) => y !==2).map(([x, y]) => Number(x)).reduce((prev, curr) => prev * curr);
    }
    
    if(Object.values(obj).includes(3)){
        for(let [i,j] of Object.entries(obj)) {
            if(j === 3) {
              return (10 * Number(i) +  Number(Object.keys(obj).filter(x => x !== i)[0])) ** 2;
            }
        }
    }
    
    return Object.keys(obj).reduce((prev, curr) => Number(prev) + Number(curr), 0) * Math.abs(Object.keys(obj).reduce((prev, curr) => prev - curr))
}