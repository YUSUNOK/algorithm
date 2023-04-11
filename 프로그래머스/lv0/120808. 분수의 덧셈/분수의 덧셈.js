function solution(numer1, denom1, numer2, denom2) {
    let down = denom1 * denom2;
    let up = numer1 * denom2 + numer2 * denom1;
    let smallValue = up <= down ? up : down;
    let interNumber = 1;
    for(let i = smallValue ; i >=1 ; i--){
        if(up % i === 0 && down % i === 0){
            interNumber = i;
            break;
        } 
    }
    var answer = [parseInt(up/interNumber), parseInt(down/interNumber)];
    return answer;
}