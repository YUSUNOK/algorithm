const solution = (picture, k) => {
    let result = [];
    for(let pixel of picture) {
        let addStr = '';
        for(let i = 0; i < pixel.length; i++) {
            if(pixel[i] === '.') {
                addStr += '.'.repeat(k);
            }else{
                addStr += 'x'.repeat(k);
            }
        }
        for(let i = 0; i<k ; i++) {
            result.push(addStr);
        }
    }
    return result;
}