const solution = (str_list) => {
    const lFirstIndex = str_list.indexOf('l');
    const rFirstIndex = str_list.indexOf('r');
    
    if(lFirstIndex === -1 && rFirstIndex === -1) return [];
    if(lFirstIndex !== -1 && rFirstIndex !== -1) {
        if(lFirstIndex < rFirstIndex) {
           return str_list.slice(0, lFirstIndex);
        }else{
            return str_list.slice(rFirstIndex + 1);
        }
    }else{
        if(lFirstIndex !== -1) {
            return str_list.slice(0, lFirstIndex);
        }else{
            return str_list.slice(rFirstIndex + 1);
        }
    }
}