const solution = (keyinput, board) => {
    let result = [0,0];
    const limitBoardAbs = [(board[0]-1)/2, (board[1]-1)/2];
    for(let direction of keyinput) {
        switch(direction) {
            case 'left':
                result[0]-=1;
                if(result[0] < -limitBoardAbs[0]){
                    result[0] = -limitBoardAbs[0];
                }
                break;
                
             case 'down':
                result[1]-=1;
                if(result[1] < -limitBoardAbs[1]){
                    result[1] = -limitBoardAbs[1];
                }
                break;
           case 'right':
                result[0]+=1;
                if(result[0] > limitBoardAbs[0]){
                    result[0] = limitBoardAbs[0];
                }
                break;
            case 'up':
                result[1]+=1;
                if(result[1] > limitBoardAbs[1]){
                    result[1] = limitBoardAbs[1];
                }
                break;     
        }
    }
    return result;
}