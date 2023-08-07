const solution = (dots) => {
    const xList = [dots[0][0],dots[1][0],dots[2][0],dots[3][0]];
    const yList = [dots[0][1],dots[1][1],dots[2][1],dots[3][1]];
    
    const width = 
          Math.max(...xList) - Math.min(...xList);
    
    const height = 
          Math.max(...yList) - Math.min(...yList);
    
    return width * height;
}