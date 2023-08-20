const solution = (a, b) => {
    let result = '';
    let upValue = 0;
    let loop = Math.max(a.length, b.length);
    for(let i = 1; i<= loop; i++) {
        let sum = 0;
        if(a.length > 0) {
            sum += Number(a.slice(-1));
            a = a.substring(0, a.length-1);
        }
        if(b.length > 0) {
            sum += Number(b.slice(-1));
            b = b.substring(0, b.length-1);
        }
        result += String(((sum % 10) + upValue) % 10);
        upValue = Math.floor(sum / 10) + Math.floor(((sum % 10) + upValue) / 10);
        if(i === loop && upValue !== 0) {
            result += String(Math.floor(sum / 10) + Math.floor(((sum % 10) + upValue) / 10));
        }
    }
    return [...result].reverse().join('');
}