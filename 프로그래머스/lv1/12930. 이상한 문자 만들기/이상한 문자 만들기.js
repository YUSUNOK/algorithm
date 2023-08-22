const solution = (s) => {
    return s.split(' ').map((str) => {
        return [...str].map((x, i)=> i % 2 === 0 ? x.toUpperCase(): x.toLowerCase()).join('');
    }).join(' ');
}