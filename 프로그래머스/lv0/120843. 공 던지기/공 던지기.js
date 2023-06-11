function solution(numbers, k) { 
    const evenItem = numbers.filter((x, i) => i % 2 === 0);
    const oddItem = numbers.filter((x, i) => i % 2 !== 0);
    if(numbers.length % 2 === 0) return evenItem[(k-1) % evenItem.length];
    if(numbers.length % 2 !== 0) {
        const newItem = evenItem.concat(oddItem);
        return newItem[(k-1) % newItem.length];
    }
    
    
}