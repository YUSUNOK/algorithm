const solution = (arr) => {
   return arr.reduce((prev, curr) => [...prev, ...Array(curr).fill(curr)], []);
}