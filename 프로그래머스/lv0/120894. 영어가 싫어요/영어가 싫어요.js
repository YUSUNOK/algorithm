const solution = (numbers) => {
   return Number(["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"].reduce((accumulator, currValue, currIndex) => accumulator.replaceAll(currValue, currIndex), numbers));
}
