function solution(a, b, c, d) {
   const map1 = new Map();
    for(data of [a,b,c,d]){
        map1.set(data, (map1.get(data) || 0) + 1);
    }
    if(map1.size === 4) return [...map1].sort((x,y) => x[0]-y[0])[0][0];
    if(map1.size === 1) return [...map1][0][0] * 1111;
    if(map1.size === 3) return [...map1].map(([x, y]) => y === 1 ? x : null).filter(x => x).reduce((prev, curr) => prev * curr);
    const findValue3 = [...map1].map(([x, y]) => y).indexOf(3);
    if(findValue3 === -1) {
       return [...map1].map(([x, y]) => x).reduce((prev, curr) => prev + curr) * Math.abs([...map1].map(([x, y]) => x).reduce((prev, curr) => prev - curr))
    }
    let answer = 0;
    [...map1].forEach((x, i) => i === findValue3 ? answer += 10 * x[0] : answer += x[0]);
    return answer ** 2;
    
   
    
    
        
    
}