const solution = (age) => 
    [...String(age)]
    .map(x => 'abcdefghij'[x]).join('');