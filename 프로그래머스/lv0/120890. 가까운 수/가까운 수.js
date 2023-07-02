const solution = (array, n) => 
array.sort((x, y) => Math.abs(x-n) - Math.abs(y-n) || x - y)[0];