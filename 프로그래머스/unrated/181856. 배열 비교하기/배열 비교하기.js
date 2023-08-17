const solution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
     return arr1.length > arr2.length ? 1 : -1;
  }else {
      const sumOfArr1 = arr1.reduce((prev, curr) => prev + curr, 0);
      const sumOfArr2 = arr2.reduce((prev, curr) => prev + curr, 0);
      
      if(sumOfArr1 === sumOfArr2) return 0;
      if(sumOfArr1 > sumOfArr2) return 1;
      return -1;
  }
}