const solution = (my_string, s, e) => {
    let my_stringArr = [...my_string];
    let reverseArr = [...my_string.substring(s,e+1)].reverse();
    my_stringArr.splice(s, e-s+1, ...reverseArr);
    return my_stringArr.join('');
}