const solution = (my_string, is_suffix) => {
    let startIndex = my_string.lastIndexOf(is_suffix);
    return my_string.substring(startIndex) === is_suffix ? 1 : 0;
}