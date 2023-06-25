const solution = (n) => 
    Array(Math.ceil(n/2)).fill(0)
    .map((x, i) => 2*i+1);
