const solution =(dots) => {
    dots.sort((x, y) => x[0] - y[0] || x[1] - y[1]);
    for(let i = 1; i <= 3 ; i++) {
        let useIndex = [0, i];
        let inclination = (dots[i][1] - dots[0][1]) / (dots[i][0] - dots[0][0]);
        let remainArr = dots.filter((x, i) => !useIndex.includes(i));
        let remainInclination = (remainArr[1][1] - remainArr[0][1]) / (remainArr[1][0] - remainArr[0][0]);
        if(inclination === remainInclination) {
            return 1;
        }
    }
    return 0;
}
