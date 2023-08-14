const solution = (n) => {
    let non3xValue = 0;
    for(let decimalNumber = 1; decimalNumber <= n; decimalNumber++) {
        non3xValue += 1;
        if(non3xValue % 3 === 0 || String(non3xValue).includes('3')) {
            while(non3xValue % 3 === 0 || String(non3xValue).includes('3')) {
                non3xValue += 1;
            }
        }
    }
    return non3xValue;
}