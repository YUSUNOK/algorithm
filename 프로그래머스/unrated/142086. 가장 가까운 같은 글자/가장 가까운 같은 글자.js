const solution = (s) => {
    let result = [];
    for(let i = 0; i < s.length; i++) {
        let findIndex = s.slice(0, i).lastIndexOf(s[i]);
        if(findIndex !== -1){
            findIndex = i - findIndex;
        }
        result.push(findIndex);
    }
    return result;
}