const solution = (price, money, count) => {
    const pay = Array(count).fill(price).reduce((prev, curr, i) => prev + curr * (i+1), 0);
    return money > pay ? 0 : pay - money;
}