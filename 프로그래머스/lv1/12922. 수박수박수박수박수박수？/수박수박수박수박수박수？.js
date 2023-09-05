const solution = (n) => {
    const isEven = n % 2 === 0;
    return isEven ? '수박'.repeat(n / 2) : '수박'.repeat(n / 2 - 0.5)+'수';
}