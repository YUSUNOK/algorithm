function solution(my_string) {
    return [...my_string].map(x => +x).filter(x => !isNaN(x)).sort((x,y) => x-y);
}