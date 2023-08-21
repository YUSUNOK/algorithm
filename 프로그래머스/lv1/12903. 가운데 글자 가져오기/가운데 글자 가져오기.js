const solution = (s) => {
    const index = Math.floor(s.length/2);
    return s.length % 2 === 0 ? s.substring(index-1, index+1) : s[index];
}