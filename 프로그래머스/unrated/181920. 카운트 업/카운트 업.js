const solution = (start, end) => {
    return Array(end-start+1).fill(start).map((x, i) => x+i);
}