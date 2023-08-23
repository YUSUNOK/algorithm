const solution = (numbers) => {
    
    let sumList = [];
    for(let i = 0; i< numbers.length -1; i++) {
        for(let j = i+1; j < numbers.length; j++) {
            sumList.push(numbers[i] + numbers[j]);
        }
    }
    
    const uniqueSumListSet = new Set(sumList);
    return [...uniqueSumListSet].sort((x, y) => x - y);
}