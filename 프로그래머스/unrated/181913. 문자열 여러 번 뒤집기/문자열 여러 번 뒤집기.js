const solution = (my_string, queries) => {
    let my_stringArr = [...my_string];
    for(let query of queries) {
        let filterAndReverseArr = my_stringArr.slice(query[0], query[1] + 1).reverse();
        my_stringArr.splice(query[0], filterAndReverseArr.length, ...filterAndReverseArr);
    }
    return my_stringArr.join('');
}