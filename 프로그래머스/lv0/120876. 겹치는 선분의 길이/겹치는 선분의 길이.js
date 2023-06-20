function solution(lines) {
    const map1 = new Map();
    for(let line of lines) {
        for(let i = line[0] + 0.5 ; i < line[1] ; i++) {
            map1.set(i , (map1.get(i) || 0) + 1);
        }
    }
    return [...map1].filter((x) => x[1] >= 2).length;
}