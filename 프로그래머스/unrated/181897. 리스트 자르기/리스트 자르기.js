const solution = (n, slicer, num_list) => {
    let startNumber;
    let lastNumber;
    switch(n) {
        case 1:
            startNumber = 0;
            lastNumber = slicer[1] + 1;
            break;
        case 2:
            startNumber = slicer[0];
            lastNumber = num_list.length; 
            break;
        case 3: 
            startNumber = slicer[0];
            lastNumber = slicer[1] + 1;
            break;
        case 4:
            startNumber = slicer[0];
            lastNumber = slicer[1] + 1;
            num_list = num_list.filter((x, i) => 
                (i >= startNumber) && (i < lastNumber) && (((i-startNumber) % slicer[2]) === 0));
}
    return n === 4 ? num_list : num_list.slice(startNumber, lastNumber);
}