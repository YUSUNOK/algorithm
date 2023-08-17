const solution = (n_str) => {
    const startIndex = [...n_str].findIndex((element) => element !== '0');
    return n_str.substring(startIndex);
}