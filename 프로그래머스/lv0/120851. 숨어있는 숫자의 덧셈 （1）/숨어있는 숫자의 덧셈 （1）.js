function solution(my_string) {
    return  [...my_string].map(x => +x).filter(x => !isNaN(x)).reduce((prev, curr) => prev + curr);
}