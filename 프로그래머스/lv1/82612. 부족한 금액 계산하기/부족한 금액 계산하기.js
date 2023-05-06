function solution(price, money, count) {
    const needPrice = count * (1 + count) * price / 2 ;
    return needPrice > money ? needPrice - money : 0 ;
}