const solution = (price) => {
    if(price >= 500000) return Math.trunc(price - price * 0.01 * 20);
    if(price >= 300000) return Math.trunc(price - price * 0.01 * 10);
    if(price >= 100000) return Math.trunc(price - price * 0.01 * 5);
    return price;
}