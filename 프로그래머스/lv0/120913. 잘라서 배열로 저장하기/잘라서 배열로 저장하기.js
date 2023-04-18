function solution(my_str, n) {
    var arr = [...my_str];
    var answer = [];
    var num = 0;
    for(let i = 0 ; i < Math.ceil(arr.length / n); i++){
        if(i === Math.ceil(arr.length / n) -1){
             answer.push(arr.slice(num).join(""));    
        }
        else{
        answer.push(arr.slice(num , num + n ).join(""));     
        }
        num += n;
    }
    return answer;
}