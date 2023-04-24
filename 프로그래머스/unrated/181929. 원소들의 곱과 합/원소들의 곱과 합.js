function solution(num_list) {
    const gop = [...num_list].reduce((prev, curr) => prev * curr);
    const hap_zegop = [...num_list].reduce((prev, curr) => prev + curr) ** 2;
    return gop < hap_zegop ? 1 : 0;
}