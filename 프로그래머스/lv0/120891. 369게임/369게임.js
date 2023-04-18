function solution(order) {
    return [...String(order)].filter(x => ["3","6","9"].includes(x)).length;;
}