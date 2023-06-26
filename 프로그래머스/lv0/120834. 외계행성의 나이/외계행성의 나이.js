const solution = (age) => 
    [...String(age)]
    .map(x => String.fromCharCode(x.charCodeAt(0) + 49)).join('');