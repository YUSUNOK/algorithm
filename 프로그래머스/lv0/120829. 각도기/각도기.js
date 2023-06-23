const solution = (angle) => {
    switch(angle % 90) {
        case 0 : return angle === 90 ? 2 : 4;
        default : return angle < 90 ? 1 : 3;       
    }
}