const solution = (arr, k) => {
    const arrSet = new Set(arr);
    let filterArr = [...arrSet].filter((x, i) => i < k);
    if(filterArr.length === k) return filterArr;
    else return [...filterArr, ...Array(k-filterArr.length).fill(-1)];
}