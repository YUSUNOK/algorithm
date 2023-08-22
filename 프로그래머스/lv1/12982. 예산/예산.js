const solution = (d, budget) => {
    let nowSum = 0;
    return d.sort((x, y) => x - y).filter((x, i) => {
        nowSum += x;
        return nowSum <= budget;
    }).length;
}