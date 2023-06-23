const solution = (slice, n) => 
    n % slice === 0 ? Math.trunc(n/slice) : Math.trunc(n/slice) + 1;