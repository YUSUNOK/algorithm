function solution(numlist, n) {
    const newArr = [];
    numlist.map(x => {
       return x > n ? newArr.push([1, Math.abs(x-n)]) : newArr.push([0, Math.abs(x-n)]);
    });
    newArr.sort((x,y) => x[1] - y[1] || y[0] - x[0]);
    return newArr.reduce((prev, curr) => curr[0] === 1 ? [...prev, n + curr[1]] : [...prev, n - curr[1]], []);
   
}