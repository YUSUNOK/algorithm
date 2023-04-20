function solution(box, n) {
    box[0] = ~~(box[0] /n);
    return box.reduce((prev, curr) => prev * ~~(curr / n));
}