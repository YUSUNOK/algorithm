const solution = (n, arr1, arr2) => {
    // 암호화된 숫자를 해독해야 한다.
    // 하나라도 '#'(1)벽이면 그 자리는 1이다. 
    // 둘다 ' '공백(0)이면 그 자리는 0이다.
    let newArr1 = arr1.map((x) => {
        let newX = x.toString(2);
        if(newX.length < n) {
          newX = '0'.repeat(n-newX.length) + newX;
        }
        return newX;
    });
    
    let newArr2 = arr2.map((x) => {
        let newX = x.toString(2);
        if(newX.length < n) {
          newX = '0'.repeat(n-newX.length) + newX;
        }
        return newX;
    });

    return newArr1.map((x, i) => {
        let newX = '';
        for(let indexOfStr = 0; indexOfStr < n; indexOfStr++) {
            Number(x[indexOfStr]) || Number(newArr2[i][indexOfStr]) ? newX += '#' : newX += ' ';
        }
        return newX;
    })
    
 
}