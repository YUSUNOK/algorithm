const solution = (my_string) => {
   const filterNumbers = my_string.replaceAll(/[A-Za-z]/g, '*').split('*').filter((x) => x);
   return filterNumbers.length === 0 ? 0 : 
    filterNumbers.reduce((prev, curr) => prev + Number(curr), 0);
}