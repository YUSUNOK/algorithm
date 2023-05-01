function solution(n_str) {
    const index = [...n_str].findIndex(x => x !== '0');
    return [...n_str].splice(index).join("");
}