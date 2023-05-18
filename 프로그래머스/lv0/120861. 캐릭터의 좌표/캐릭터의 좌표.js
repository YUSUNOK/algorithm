function solution(keyinput, board) {
    const maxXabs = Math.floor(board[0] / 2);
    const maxYabs = Math.floor(board[1] / 2);
    
    const countMap = new Map();
    
    countMap.set('x', 0);
    countMap.set('y', 0);

    for(let key of keyinput) {
     switch(key) {
      case 'left':  
        if(countMap.get('x') === - maxXabs){
            break;
        }else{
            countMap.set('x', countMap.get('x') - 1); 
            break;
        }
      case 'right': 
        if(countMap.get('x') === maxXabs){
            break;
        }else{
            countMap.set('x', countMap.get('x') + 1); 
            break;
        }
      case 'up' :
        if(countMap.get('y') === maxYabs){
            break;
        }else{
            countMap.set('y', countMap.get('y') + 1); 
            break;
        }     
      case 'down' :
        if(countMap.get('y') === -maxYabs){
            break;
        }else{
            countMap.set('y', countMap.get('y') -1); 
            break;
        }     
     }
    }
    const x_movement = countMap.get('x');
    const y_movement = countMap.get('y');
    return [x_movement, y_movement];
}