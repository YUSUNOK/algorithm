function solution(num_str) {
    return [...num_str].map(x => +x).reduce((prev, curr) => prev + curr);
}