const solution = (my_string) => 
    my_string
    .split(/\D+/)
    .reduce((prev, curr) => prev + Number(curr), 0);
