function solution(num_list) {
    let count = 0;
    for(let num of num_list) {
        while(num !== 1) {
          num = Math.floor(num / 2);
          count++;  
        }
    }
    return count;
}