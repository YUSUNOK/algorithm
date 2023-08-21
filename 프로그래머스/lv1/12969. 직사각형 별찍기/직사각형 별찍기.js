process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = Number(data.split(" ")[0]), m = Number(data.split(" ")[1])
    for(let i = 0 ; i < m; i++) {
        console.log('*'.repeat(n));
    }
});