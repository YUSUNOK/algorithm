const solution = (my_string, alp) => {
    let answerStr = '';
    for(let str of my_string) {
        str === alp ? answerStr+= str.toUpperCase() : answerStr+=str;
    }
    return answerStr;
}