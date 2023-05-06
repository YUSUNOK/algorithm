function solution(s){
    let countObj = {};
    for(let str of s.toLowerCase()){
        if(str === 'p'){
            countObj['p'] =  (countObj['p'] || 0) + 1;
        }
        if(str === 'y'){
            countObj['y'] =  (countObj['y'] || 0) + 1;
        }
    }  
    return countObj['p'] === countObj['y'] ? true : false;
}