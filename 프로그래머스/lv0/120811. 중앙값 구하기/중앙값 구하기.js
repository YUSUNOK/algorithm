const solution = (array) => 
    array
    .sort((x, y) => x - y)[Math.trunc(array.length/2)];
