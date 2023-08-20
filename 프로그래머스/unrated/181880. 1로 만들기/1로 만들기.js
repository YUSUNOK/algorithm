const solution = (num_list) => {
    let result = 0;
    for(let num of num_list) {
        while(num !== 1){
            num = Math.floor(num / 2);
            result++;
        }
    }
    return result;
}