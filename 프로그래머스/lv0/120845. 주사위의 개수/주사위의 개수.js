const solution = (box, n) => box.reduce((prev, curr) =>
    prev * Math.floor(curr / n), 1);