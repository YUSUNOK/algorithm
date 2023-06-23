const solution = (dot) => {
    switch(dot[0] * dot[1] < 0){
        case true : return dot[0] < 0 ? 2 : 4; 
        case false : return dot[0] < 0 ? 3 : 1;
    }
}