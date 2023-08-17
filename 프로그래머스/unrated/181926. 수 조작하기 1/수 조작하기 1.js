const solution = (n, control) => {
    const calculationObj = {
        'w': 1,
        's': -1,
        'd': 10,
        'a': -10,
    }
    for(let alphabet of control) {
        n+=calculationObj[alphabet];
    }
    return n;
}