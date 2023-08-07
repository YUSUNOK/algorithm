const solution = (keyinput, board) => {
    let result = [0,0];
    const limitBoardAbs = [(board[0]-1)/2, (board[1]-1)/2];
    for(let direction of keyinput) {
        switch(direction) {
            case 'left':
                if(--result[0] < -limitBoardAbs[0]) result[0] = -limitBoardAbs[0];
                break;
                
             case 'down':
                if(--result[1] < -limitBoardAbs[1]) result[1] = -limitBoardAbs[1];
                
                break;
           case 'right':
                if(++result[0] > limitBoardAbs[0]) result[0] = limitBoardAbs[0];
                
                break;
            case 'up':
                if(++result[1] > limitBoardAbs[1]) result[1] = limitBoardAbs[1];
                
                break;     
        }
    }
    return result;
}