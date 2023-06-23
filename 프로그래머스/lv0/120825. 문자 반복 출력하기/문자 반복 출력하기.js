const solution = (my_string, n) => 
    [...my_string].reduce((prev, curr) => prev + curr.repeat(n),'');