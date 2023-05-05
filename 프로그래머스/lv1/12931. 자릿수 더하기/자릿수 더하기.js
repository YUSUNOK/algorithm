function solution(n)
{
    return [...String(n)].map(x => parseInt(x)).reduce((prev, curr) => prev + curr);
}