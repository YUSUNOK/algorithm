const solution = (my_string) => {
    let result = Array(52).fill(0);
    let my_stringArr = [...my_string];
    let alphabetStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    for(let i = 0; i < alphabetStr.length; i++) {
        let addValue = my_stringArr.filter((x) => x === alphabetStr[i]).length;
        result[i] = addValue;
    }
   return result;
}