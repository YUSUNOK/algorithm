const solution = (myStr) => {
    myStr = myStr.replaceAll('a', ' ');
    myStr = myStr.replaceAll('b', ' ');
    myStr = myStr.replaceAll('c', ' ');
    let resultArr = myStr.split(' ').filter(x => x);
    return resultArr.length === 0 ? ['EMPTY'] : resultArr;
}