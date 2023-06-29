const solution = (i, j, k) =>
    [...Array(j-i + 1).fill(i).map((x, i) => x+i).join("")].map(x => +x).filter(x => x === k).length;
