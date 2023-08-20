const solution = (myString, pat) => {
    let count = 0;
    if(!myString.includes(pat)) return 0;
    for(let i = myString.indexOf(pat); i < myString.length ; i++) {
        let substr = myString.substring(i, i+pat.length);
        if(substr === pat) {
            count++;
        } 
    }
    return count;
}