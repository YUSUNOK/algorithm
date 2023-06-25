const solution = (my_string) => 
    [...my_string]
    .filter(x => x.charCodeAt(0) >= 48 && x.charCodeAt(0) <= 57)
    .sort()
    .map(x => Number(x));
