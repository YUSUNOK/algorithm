const solution = (numbers, direction) => {
    let copyNumbers = numbers.slice();
    direction === 'right' ?
        copyNumbers.unshift(copyNumbers.pop()) :
        copyNumbers.push(copyNumbers.shift());
    return copyNumbers;
}