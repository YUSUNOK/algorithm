const solution = (numlist, n) => {
   return numlist.sort((x, y) => Math.abs(x - n) - Math.abs(y - n) || y - x);
}