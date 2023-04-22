function solution(n) {
    let gop = 1;
    let index = 1;
    while(gop * index <= n) {
        gop *= index++;
    }
    return index - 1;
}