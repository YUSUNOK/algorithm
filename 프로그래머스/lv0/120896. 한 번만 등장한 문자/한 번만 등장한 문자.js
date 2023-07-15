const solution = (s) => [...s].filter((x) => s.indexOf(x) === s.lastIndexOf(x)).sort().join('');

