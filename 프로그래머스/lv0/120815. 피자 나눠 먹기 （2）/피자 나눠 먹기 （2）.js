const solution = (n) => {
    let max = n >= 6 ? n : 6;
    while(true){
        if(max % n === 0 && max % 6 === 0) break;
        max++;
    }
    return max / 6;
}